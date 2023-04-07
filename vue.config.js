// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//     transpileDependencies: true
// })


// module.exports = {
//     devServer: {
//         open: "/"
//     }
// }




const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer:{
        open:true ,
        host:"localhost"
    }
})
