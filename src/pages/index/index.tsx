import * as React from 'react'
import { useNativeEffect } from 'remax'
import { View, Text, Image } from 'remax/one'
import styles from './index.css'
import './index.less'

const Home = () => {
  useNativeEffect(() => {
    console.log('useNativeEffect', process.env.REMAX_APP_CLOUD_ENV)
    console.log('useNativeEffect', process.env.REMAX_APP_RELEASE_ENV)
  }, [])
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src='https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ'
          className={styles.logo}
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text> 开始
        </View>
      </View>
    </View>
  )
}
export default Home
