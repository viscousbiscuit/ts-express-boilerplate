async function getHome(req, res) {
    res.send('Default Route');
}

async function getHomeDefault(req, res) {
    res.send('Home Default');
}

async function getHomeId(req,res) {
    
    res.send(`Home Id ${req.params.id}`);
}

export { getHome, getHomeDefault, getHomeId };