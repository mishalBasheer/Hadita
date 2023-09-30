const showLanding=(req,res)=>{
    res.render('user/landingPage');
}
const showContact=(req,res)=>{
    res.render('user/contact')
}

export {showLanding, showContact};