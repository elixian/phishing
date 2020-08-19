export default function log({next, to}){
    console.log('test',to.name);
    return next();
}