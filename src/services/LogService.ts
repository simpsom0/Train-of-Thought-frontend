import {
  LogError,
  LogFatal,
  LogInfo,
  LogPrint,
  LogWarning
} from '@WailsJsRuntime';

export class Log {
  print(message: string) {
    this.determineCall(LogPrint, console.log, message);
  }
  info(message: string) {
    this.determineCall(LogInfo, console.info, message);
  }
  warn(message: string) {
    this.determineCall(LogWarning, console.warn, message);
  }
  error(message: string) {
    this.determineCall(LogError, console.error, message);
  }
  fatal(message: string) {
    this.determineCall(LogFatal, console.error, message);
  }

  // "works for development" solution to view logs in browser and wails app
  // TODO: implement properly once infra is setup
  private determineCall(
    wailsFn: (message: string) => void,
    browserFn: (message: string) => void,
    message: string
  ) {
    if (import.meta.env.DEV) {
      wailsFn(message);
      browserFn(message);
    }
  }
}
