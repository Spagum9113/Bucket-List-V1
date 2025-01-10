import React, { Component } from "react"
import BucketItem from "./BucketItems"
import BucketItemData from "./BucketItemData"
import "./App.css"






class App extends Component {


  constructor() {
    super()
    this.state = {
      bucketList: BucketItemData
    }
  }


  render() {
    const { bucketList } = this.state

    const firstCol = bucketList.slice(0, 33)
    const secondCol = bucketList.slice(33, 67)
    const thirdCol = bucketList.slice(67)




    return (

      <div className="all">

        {/* Header Text */}
        <div className="app-container">
          <h1 className="title"> bucket list. </h1>

          <p className="subtitle"> 100 things to do before i die or become a zombie. </p>

          <p className="completed"> completed: 2 </p>

          <img className="zombie-sticker" src="zombieSticker2.png" alt="zomebie-sticker" />


        </div>

        {/* The three colummns */}

        <div class="columns">

          <div class="firstCol">
            {firstCol.map((item) => (
              <BucketItem key={item.id} item={item} />
            ))}
          </div>


          <div class="secondCol">
            {secondCol.map((item) => (
              < BucketItem key={item.id} item={item} />
            ))}
          </div>


          <div class="thirdCol">
            {thirdCol.map((item) => (
              < BucketItem key={item.id} item={item} />
            ))}
          </div>

        </div>





        {/* <div>
          {this.state.bucketList.map((item) => (
            <BucketItem key={item.id} item={item} />
          ))}
        </div> */}




      </div>

    )
  }
}



export default App