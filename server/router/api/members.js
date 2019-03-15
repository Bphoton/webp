import express from 'express'

import {members} from '../../js/Members' //note: cant interchange default and non-default params

export const router = express.Router()

// get single member | with router
// post man: [get] http://localhost:3000/api/members/2 [send]
// js: a.filter | a.some
// 1. change app/express to router
// 2. parse req.params.id
router.get('/:id', (req, res) => {
    const found = members.some(m => m.id === parseInt(req.params.id)) 
    if(found){
        res.json( members.filter(m => m.id === parseInt(req.params.id)) )
    } else {
        res.status(400).json({ msg: `no member with the id of ${req.params.id}`})
    }
}) 

// api get all ./Members | with router
// postman: get: http://localhost:3000/api/members : [send]
// input: get url :: output: response json
router.get('/', (req, res) => {
    res.json(members)
})

// post // add a member
// post man // [post] localhost:3000/api/members [send]
//  headers: [key]: content-type [value]: application/json
//  body: [raw]: {JSON}
// body parser middleware init
// need express | host | body parser | url | listener
//  url like:: app.use('/api/members', router)
router.post('/', (req, res) =>{ //shouldn't I post the to same url as /api/members ???
    // res.send(req.body) // return the added member/post
    const newMember = {
        id: Math.random(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg: 'please include name and email'})
    }
    // if using a database, syntax like :: members.save(newMember)
    members.push(newMember)
    // res.json(members) // use this with post man || html api button, instead ::
     res.redirect('/') // use this with HTML
})

// put // update a member
// post man [put] http://localhost:3000/api/members/1 [send]
//  header: [key] Content-Type [value] application/json
//  body: [raw] {JSON}
// need express | host | body parser | url | listener
router.put('/:id', (req, res) => {
    const found = members.some(m => m.id === parseInt(req.params.id))
    if(found){
        const updateMember = req.body
        // note: should be member not s. Updating only one member
        members.forEach(m => {
            if(m.id === parseInt(req.params.id)){
                m.name = updateMember ? updateMember.name : m.name
                m.email = updateMember ? updateMember.email : m.email
                res.json({msg: 'Member Updated', members:members})
            }
        })
    } else {
        res.status(400).json({ msg: `no member with the id of ${req.params.id}`})
    }
}) 

// delete member
router.delete('/:id', (req, res) => {
    const found = members.some(m => m.id === parseInt(req.params.id)) 
    if(found){
        res.json({msg: 'Member Deleted', members: members.filter(m => m.id !== parseInt(req.params.id)) })
    } else {
        res.status(400).json({ msg: `no member with the id of ${req.params.id}`})
    }
}) 