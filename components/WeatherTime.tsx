"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic';

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
  "01d": WbSunnyOutlinedIcon, // clear sky day
  "01n": NightlightOutlinedIcon, // clear sky night
  "02d": CloudQueueOutlinedIcon, // few clouds day
  "02n": CloudOutlinedIcon, // few clouds night
  "03d": CloudOutlinedIcon, // scattered clouds
  "03n": CloudOutlinedIcon,
  "04d": CloudOutlinedIcon, // broken clouds
  "04n": CloudOutlinedIcon,
  "09d": WaterDropOutlinedIcon, // shower rain
  "09n": WaterDropOutlinedIcon,
  "10d": WaterDropOutlinedIcon, // rain day
  "10n": WaterDropOutlinedIcon, // rain night
  "11d": ThunderstormOutlinedIcon, // thunderstorm
  "11n": ThunderstormOutlinedIcon,
  "13d": AcUnitOutlinedIcon, // snow
  "13n": AcUnitOutlinedIcon,
  "50d": FilterDramaOutlinedIcon, // mist
  "50n": FilterDramaOutlinedIcon,
};

export default function WeatherTime() {
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
    // Update every minute instead of every second to reduce re-renders
    const timeInterval = setInterval(updateTime, 60000);

    return () => clearInterval(timeInterval);
  }, []);

  // Fetch weather data
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const WEATHER_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || process.env.OPENWEATHER_API_KEY;
        
        if (!WEATHER_API_KEY) {
          // Use fallback data
          setWeather({
            temperature: 72,
            condition: "Clear",
            icon: "01d"
          });
          return;
        }

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Denver,CO,US&appid=${WEATHER_API_KEY}&units=imperial`
        );
        
        if (response.ok) {
          const data = await response.json();
          setWeather({
            temperature: Math.round(data.main.temp),
            condition: data.weather[0].main,
            icon: data.weather[0].icon
          });
        } else {
          // Fallback on API error
          setWeather({
            temperature: 72,
            condition: "Clear",
            icon: "01d"
          });
        }
      } catch {
        // Fallback data
        setWeather({
          temperature: 72,
          condition: "Clear",
          icon: "01d"
        });
      }
    };

    fetchWeather();
    // Refresh weather every 10 minutes
    const weatherInterval = setInterval(fetchWeather, 10 * 60 * 1000);

    return () => clearInterval(weatherInterval);
  }, []);

  const IconComponent = WeatherIconComponents[weather.icon as keyof typeof WeatherIconComponents] || WbSunnyOutlinedIcon;

  return (
    <AnimatePresence>
      <motion.div
        className="flex items-center space-x-3 text-sm font-medium"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Weather Icon and Temperature */}
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-muted">
            <IconComponent 
              sx={{ 
                fontSize: '1.25rem',
                fontWeight: 100,
                strokeWidth: 0.5
              }} 
            />
          </div>
          <span className="hidden sm:inline text-muted font-medium">
            {weather.temperature}°
          </span>
        </motion.div>

        {/* Location */}
        <div className="hidden sm:flex flex-col items-center">
          <span className="text-muted font-semibold tracking-wide">
            Denver, CO
          </span>
        </div>

        {/* Time */}
        <motion.div
          className="text-muted font-mono tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {currentTime}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 