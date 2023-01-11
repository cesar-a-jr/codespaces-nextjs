export default function handler(req, res) {
  return res.status(200).json({ 
    data:[
      {id: 1, name: 'Cesar'},
      {id: 2, name: 'teste'}
      
    ]
  })
  
}

