

const Ninjas = ({ninjas, deleteNinja}) => {

    console.log(ninjas)
    const ninjaList = ninjas.map(ninja => {
      return ninja.age >= 30 ? (  (
        <div key={ninja.id}>
        <h3>Ninja Credential No. {ninja.id}</h3>
        <p> Name: {ninja.name}</p>
        <p>Age: {ninja.age}</p>
        <p>Belt: {ninja.belt}</p>
        <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
        </div>
      )): null
    });

   
    return (
      <div>
        <h1>Ninjas Credential:</h1>
        {ninjaList}
      </div>
    )
    
}
export {Ninjas}