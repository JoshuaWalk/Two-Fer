const twoFer = (name = `${ name }`) => {
    if(name === ''){
        return `One for you, one for me.`
    }
    else(`${ name }`);{
        return `One for ${ name }, one for me.`
    }    
}
   
module.exports = {
    twoFer
}