module.exports = {
  chainWebpack:(config)=>{
    // 设置短链接
    config.resolve.alias
        .set('@',resolve('./src'))
  }
}