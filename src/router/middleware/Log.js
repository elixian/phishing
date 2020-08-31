export default function log({next, to}){
    console.log('test',to.name);
    console.log('route name' , this.route.name)
    return next();
}