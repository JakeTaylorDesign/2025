"use client";

import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic';
import NoSSR from './NoSSR';

// Lazy load MUI icons to reduce bundle size
const WbSunnyOutlinedIcon = dynamic(() => import('@mui/icons-material/WbSunnyOutlined'), { ssr: false });
const NightlightOutlinedIcon = dynamic(() => import('@mui/icons-material/NightlightOutlined'), { ssr: false });
const CloudOutlinedIcon = dynamic(() => import('@mui/icons-material/CloudOutlined'), { ssr: false });
const WaterDropOutlinedIcon = dynamic(() => import('@mui/icons-material/WaterDropOutlined'), { ssr: false });
const ThunderstormOutlinedIcon = dynamic(() => import('@mui/icons-material/ThunderstormOutlined'), { ssr: false });
const AcUnitOutlinedIcon = dynamic(() => import('@mui/icons-material/AcUnitOutlined'), { ssr: false });
const FilterDramaOutlinedIcon = dynamic(() => import('@mui/icons-material/FilterDramaOutlined'), { ssr: false });
const CloudQueueOutlinedIcon = dynamic(() => import('@mui/icons-material/CloudQueueOutlined'), { ssr: false });

interface WeatherData {
  temperature: number;
  condition: string;
  icon: string;
}

const WeatherIconComponents = {
  "01d": WbSunnyOutlinedIcon,
  "01n": NightlightOutlinedIcon,
  "02d": CloudQueueOutlinedIcon,
  "02n": CloudOutlinedIcon,
  "03d": CloudOutlinedIcon,
  "03n": CloudOutlinedIcon,
  "04d": CloudOutlinedIcon,
  "04n": CloudOutlinedIcon,
  "09d": WaterDropOutlinedIcon,
  "09n": WaterDropOutlinedIcon,
  "10d": WaterDropOutlinedIcon,
  "10n": WaterDropOutlinedIcon,
  "11d": ThunderstormOutlinedIcon,
  "11n": ThunderstormOutlinedIcon,
  "13d": AcUnitOutlinedIcon,
  "13n": AcUnitOutlinedIcon,
  "50d": FilterDramaOutlinedIcon,
  "50n": FilterDramaOutlinedIcon,
};

function WeatherTime() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 75,
    condition: "Sunny",
    icon: "01d"
  });

  // Update time every minute instead of every second for better performance
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: "America/Denver",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).toLowerCase();
      setCurrentTime(timeString);
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 60000);
    return () => clearInterval(timeInterval);
  }, []);

  // Fetch weather data
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const WEATHER_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || process.env.OPENWEATHER_API_KEY;
        
        console.log('Weather widget: Checking for API key...');
        
        if (!WEATHER_API_KEY) {
          // Use fallback data when no API key is available
          console.log('Weather widget: No API key found, using fallback data');
          setWeather({
            temperature: 72,
            condition: "Clear",
            icon: "01d"
          });
          return;
        }

        console.log('Weather widget: Fetching weather data...');
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Denver,CO,US&appid=${WEATHER_API_KEY}&units=imperial`
        );
        
        if (response.ok) {
          const data = await response.json();
          console.log('Weather widget: Successfully fetched weather data:', data);
          setWeather({
            temperature: Math.round(data.main.temp),
            condition: data.weather[0].main,
            icon: data.weather[0].icon
          });
        } else {
          // Fallback on API error
          console.log('Weather widget: API error, status:', response.status, 'using fallback data');
          setWeather({
            temperature: 72,
            condition: "Clear",
            icon: "01d"
          });
        }
      } catch (error) {
        // Fallback data on any error
        console.error('Weather widget: Fetch failed:', error);
        setWeather({
          temperature: 72,
          condition: "Clear",
          icon: "01d"
        });
      }
    };

    fetchWeather();
    // Fetch weather every 10 minutes instead of more frequently
    const weatherInterval = setInterval(fetchWeather, 600000);
    return () => clearInterval(weatherInterval);
  }, []);

  const IconComponent = WeatherIconComponents[weather.icon as keyof typeof WeatherIconComponents] || WbSunnyOutlinedIcon;

  return (
    <motion.div
      className="flex items-center gap-4 bg-background/50 backdrop-blur-sm border border-border rounded-full px-6 py-2 min-w-fit"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={weather.icon}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="text-accent"
          >
            <IconComponent sx={{ fontSize: 18 }} />
          </motion.div>
        </AnimatePresence>
        <span className="text-sm font-medium text-foreground whitespace-nowrap">
          {weather.temperature}°
        </span>
      </div>
      
      <div className="w-px h-4 bg-border" />
      
      <NoSSR fallback={<span className="text-sm font-medium text-muted font-mono whitespace-nowrap">...</span>}>
        <span className="text-sm font-medium text-muted font-mono whitespace-nowrap">
          {currentTime}
        </span>
      </NoSSR>
      
      <div className="w-px h-4 bg-border" />
      
      <span className="text-sm text-muted/70 whitespace-nowrap">
        Denver, CO
      </span>
    </motion.div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(WeatherTime);