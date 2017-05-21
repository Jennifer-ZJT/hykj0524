/**
 * Created by nihao on 2017/5/18.
 */
module.exports={
    entry:'./entry.js',
    output:{
        path:__dirname,
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.css$/, loader:'style!css'}
        ]
    }
}
