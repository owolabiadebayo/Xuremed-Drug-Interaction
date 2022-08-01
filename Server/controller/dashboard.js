import Dashboard from "../model/dashboard/dashboard";

export const dashboard = async (req,res) => {
    console.log(req.body);
    const dashboard = new Dashboard ({
        interaction1:[{
            drugbank_id1:req.body.drugbank_id1,
            name1: req.body.name1
        }],
        interaction2:[{
            drugbank_id2:req.body.drugbank_id2,
            name2: req.body.name2
        }],
        interaction3:[{
            action:req.body.action,
            severity: req.body.severity
        }, 
    ]
    })
    try {
        await dashboard.save();
        res.send({
            user: dashboard._id,
        });
    } catch (err) {
        res.status(400).send(err);
    }
}

export const fetchDrug = async (req,res) => {
    const Name = await Dashboard.find(req.params._id).exec();
    res.json(Name)
}
