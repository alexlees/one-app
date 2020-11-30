declare global {
  namespace NodeJS {
    interface ProcessEnv extends Dict<string> {
      /**
       * 云函数环境id
       */
      REMAX_APP_CLOUD_ENV: string
      /**
       * 发布环境变量
       */
      REMAX_APP_RELEASE_ENV: 'prod' | 'dev' | 'test' | 'analyzer'
    }
  }
}
export {}
