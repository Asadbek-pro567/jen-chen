import React from 'react'

function JenChen() {
  return (
    <>
    <div className='container'>
        {
            ShouldDrink?.map((e,i)=>(
                <>
                <h2>{e.title_uz}</h2>
                <ul>
                    {
                        e.cause.map((item)=>(
                            <li>{item.text_uz}</li>
                        ))
                    }
                </ul>
                </>
            ))
        }
    </div>
    </>
  )
}

export default JenChen