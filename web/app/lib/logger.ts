type LogData = Record<string, unknown>;
type LogLevel = "info" | "warn" | "error";

function write(level: LogLevel, event: string, data: LogData = {}) {
  try {
    console[level](JSON.stringify({
      timestamp: new Date().toISOString(),
      service: "makka-hotel",
      event,
      ...data,
    }));
  } catch {
    // Logging must never make a visitor request fail.
  }
}

export const logger = {
  info: (event: string, data?: LogData) => write("info", event, data),
  warn: (event: string, data?: LogData) => write("warn", event, data),
  error: (event: string, data?: LogData) => write("error", event, data),
};
