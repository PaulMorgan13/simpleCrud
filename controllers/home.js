const Itemlist = require("../model/itemlist")  

module.exports = {
    getIndex : async (req, res) => {
        try {
            const items = await

            Itemlist.find()
            res.render("index", { itemList: items });
        } catch (err) {
            if (err) return res.status(500).send(err);
        }
    },
    createItem: async (req, res) => {
        const newItem = new ItemList(
            {
                textInput: req.body.textinput,
                numInput: req.body.numinput
            });
        try {
            await newItem.save();
            console.log(newItem)
            res.redirect("/");
        } catch (err) {
            if (err) return res.status(500).send(err);
            res.redirect("/");
        }
    }  

}