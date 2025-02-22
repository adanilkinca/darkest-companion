import React from 'react';  // ✅ Add this import
import { createDevTools } from '@redux-devtools/core';
import { DockMonitor } from '@redux-devtools/dock-monitor';
import { LogMonitor } from '@redux-devtools/log-monitor';

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
);

export default DevTools;

