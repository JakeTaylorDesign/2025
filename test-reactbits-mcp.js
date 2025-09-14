#!/usr/bin/env node

/**
 * Test script for ReactBits MCP Server
 * This script tests the MCP server functionality
 */

import { spawn } from 'child_process';
import path from 'path';

const MCP_SERVER_PATH = path.resolve('../ReactBits_MCP/dist/index.js');

console.log('🧪 Testing ReactBits MCP Server...');
console.log(`📁 Server path: ${MCP_SERVER_PATH}`);

// Test the server with a simple MCP initialization
const testMessage = {
  jsonrpc: "2.0",
  id: 1,
  method: "initialize",
  params: {
    protocolVersion: "2024-11-05",
    capabilities: {},
    clientInfo: {
      name: "test-client",
      version: "1.0.0"
    }
  }
};

const server = spawn('node', [MCP_SERVER_PATH], {
  stdio: ['pipe', 'pipe', 'pipe']
});

server.stdin.write(JSON.stringify(testMessage) + '\n');

server.stdout.on('data', (data) => {
  console.log('✅ Server response:', data.toString());
});

server.stderr.on('data', (data) => {
  console.log('⚠️  Server error:', data.toString());
});

server.on('close', (code) => {
  console.log(`🏁 Server exited with code ${code}`);
});

// Cleanup after 5 seconds
setTimeout(() => {
  server.kill();
  console.log('🧹 Test completed');
}, 5000); 