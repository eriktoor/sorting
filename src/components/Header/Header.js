import React, { useState } from 'react';
import "./Header.css";

import "../Bootstrap.css";
import Bar from "./Bar/Bar.js"

import {getMergeSortAnimations} from '../../sortingAlgorithms/mergeSort.js';
import {getQuickSortAnimations} from '../../sortingAlgorithms/quickSort.js';



import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

  import { withStyles, makeStyles } from '@material-ui/core/styles';
  import Slider from '@material-ui/core/Slider';
  import Typography from '@material-ui/core/Typography';
  import Tooltip from '@material-ui/core/Tooltip';

  // Change this value for the speed of the animations.

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';





  const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);




  class Header extends React.Component {

    constructor() {
        super()
        this.state = {
            currentPage: <Header />,
            isOpen: false,
            setIsOpen: false, 
            sliderValue: 20,
            array: [],
        }
    
        this.toggle = this.toggle.bind(this)
        this.sliderListener = this.sliderListener.bind(this)
        
    
    
      }

      componentDidMount(){
          this.resetArray();
      }

      resetColors(){
        for (let i = 0; i < (this.state.array.length); i ++){
            document.getElementById(i).style.backgroundColor = "blue"
        }
        // array-bar

      }

      resetArray(){
          const array = []
          for (let i = 0; i < this.state.sliderValue; i++){
              array.push(parseInt(Math.random()*1000)+5);
          }
          this.setState({array}, 
            () => {this.resetColors()}
            )
      }




      toggle(event){


        this.setState((prevState, props) => {
            // alert(prevState.isOpen)
            return {setIsOpen: !prevState.isOpen,
                    isOpen: !prevState.isOpen};
          })

        } 

        sliderListener(event){
            //console.log("This is a useless method") is it stil ? 
            this.resetArray()
        }

        barChanger(){
            console.log(this.state.sliderValue)
            // this.setState += <Bar name={"Erik"} date={"20"} video={"s"}  />
            this.resetArray()
        }



        mergeSort(){

            document.getElementById("mergeSort").style.color = "rgba(220, 20, 60)"

            const ANIMATION_SPEED_MS = 500 / this.state.sliderValue
            const animations = getMergeSortAnimations(this.state.array);
            for (let i = 0; i < animations.length; i++) {
              const arrayBars = document.getElementsByClassName('array-bar');
              const isColorChange = i % 3 !== 2;
              if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barOneText = arrayBars[barOneIdx].textContent 
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const barTwoText = arrayBars[barTwoIdx].textContent
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                  barOneStyle.backgroundColor = color;
                  barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
              } else {
                setTimeout(() => {
                  const [barOneIdx, newHeight] = animations[i];
                  const barOneStyle = arrayBars[barOneIdx].style;
                //   barOneStyle.textContent = newHeight; 
                  document.getElementsByClassName('array-bar')[barOneIdx].textContent = newHeight
                  barOneStyle.height = `${newHeight}px`;
                  if (i === animations.length - 1){
                    this.completeSort()
                  }
                }, i * ANIMATION_SPEED_MS);

              }              
            }
        }

        completeSort(){
            document.getElementById("mergeSort").style.color = "rgba(255, 255, 255, .5)"
            document.getElementById("bubbleSort").style.color = "rgba(255, 255, 255, .5)"
            // document.getElementById("quickSort").style.color = "rgba(255, 255, 255, .5)"
            // document.getElementById("heapSort").style.color = "rgba(255, 255, 255, .5)"
        }     


        

        heapSort(){

            document.getElementById("heapSort").style.color = "rgba(220, 20, 60)"

            const ANIMATION_SPEED_MS = 500 / this.state.sliderValue
            const animations = getMergeSortAnimations(this.state.array);
            for (let i = 0; i < animations.length; i++) {
              const arrayBars = document.getElementsByClassName('array-bar');
              const isColorChange = i % 3 !== 2;
              if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                  barOneStyle.backgroundColor = color;
                  barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
              } else {
                setTimeout(() => {
                  const [barOneIdx, newHeight] = animations[i];
                  const barOneStyle = arrayBars[barOneIdx].style;
                  barOneStyle.height = `${newHeight}px`;
                  if (i === animations.length - 1){
                    this.completeSort()
                  }
                }, i * ANIMATION_SPEED_MS);

              }              
            }

        }


        quickSort(){

          document.getElementById("quickSort").style.color = "rgba(220, 20, 60)"

          const ANIMATION_SPEED_MS = 500 / this.state.sliderValue
          const animations = getQuickSortAnimations(this.state.array);
          console.log(animations)
          
          for (let i = 0; i < animations.length; i++) {


            const arrayBars = document.getElementsByClassName('array-bar');

            if (animations[i][1] === -1) {  //update

                setTimeout(() => {
                    let idx = animations[i][0]
                    arrayBars[idx].style.backgroundColor = "purple" //mark as pivot
                }, i * ANIMATION_SPEED_MS)
            } else if (animations[i][1] === -2 || animations[i][1] === -3){

              setTimeout(()=>{
                  let idxOne = animations[i][0]
                  // console.log(idxOne, idxTwo)
                  arrayBars[idxOne].style.backgroundColor = "red"

                }, i * ANIMATION_SPEED_MS)
          } else if (animations[i][1] === -5){

                setTimeout(()=>{
                    let idxOne = animations[i][0]
                    // console.log(idxOne, idxTwo)
                    arrayBars[idxOne].style.backgroundColor = "blue"

                  }, i * ANIMATION_SPEED_MS)
            } else if (animations[i][1] > 0){ 

                setTimeout(()=>{
                    let idx = animations[i][1]

                    let newHeight = parseInt(arrayBars[idx].textContent)

                    arrayBars[idx].textContent = newHeight
                    arrayBars[idx].style.height = newHeight +  "px"
                    arrayBars[idx].style.backgroundColor = "blue"
                }, i * ANIMATION_SPEED_MS)
            } 
            
            
            if (i === animations.length -1){
                setTimeout(()=>{
                    arrayBars[0].style.backgroundColor = "purple"
                    this.completeSort()

                }, i * ANIMATION_SPEED_MS)
            }


        } 
      }


        bubbleSort(){


            // const other_animations = getBubbleSortAnimations(this.state.array)

            // for (let i = 0; i < other_animations.length; i ++){
            //     console.log(i)
            // }
            
            document.getElementById("bubbleSort").style.color = "rgba(220, 20, 60)"

            const ANIMATION_SPEED_MS = 500 / this.state.sliderValue

            const array = this.state.array 
            const animations = []

            var arrayLength = array.length
            while (arrayLength > 0) {

                for (let i = 0; i < arrayLength - 1; i++){

                    let heightOne = array[i]
                    let heightTwo = array[i+1]

                    animations.push([i, i + 1]) // PUSH THE TWO THINGS WE ARE LOOKING AT AND TURN THEM RED -- ALWAYS HAPPENS


                    if (heightOne > heightTwo){

                        animations.push([i, heightTwo]) // CHANGE FIRST HEIGHT 
                        animations.push([i+1, heightOne]) // CHANGE SECOND HEIGHT
    
                        array[i] = array[i+1]
                        array[i+1] = heightOne 
                    } else {
                        animations.push([i, heightOne]) // KEEP THEM SAME
                        animations.push([i + 1, heightTwo]) // KEEP THEM SAME 

                    }


                    if (i === arrayLength -2) {
                        animations.push([arrayLength-1, arrayLength-1])
                    } else { 
                        animations.push([0, 0])
                    }
    
                }


                arrayLength --; 

            }



            for (let i = 0; i < animations.length; i++) {


                const arrayBars = document.getElementsByClassName('array-bar');

                if (i % 4 === 3 && animations[i][1] !== 0) { 

                    setTimeout(() => {
                        let idx = animations[i][1]
                        arrayBars[idx].style.backgroundColor = "purple" //mark as complete
                    }, i * ANIMATION_SPEED_MS)
                } else if (i % 4 === 0){

                    setTimeout(()=>{
                        let idxOne = animations[i][0]
                        let idxTwo = animations[i][1]
                        // console.log(idxOne, idxTwo)
                        arrayBars[idxOne].style.backgroundColor = "red"
                        arrayBars[idxTwo].style.backgroundColor = "red"
                    }, i * ANIMATION_SPEED_MS)
                } else if (i % 4 === 1){ 

                    setTimeout(()=>{
                        let idx = animations[i][0]

                        arrayBars[idx].textContent = animations[i][1] 
                        arrayBars[idx].style.height = animations[i][1] +  "px"
                        arrayBars[idx].style.backgroundColor = "blue"
                    }, i * ANIMATION_SPEED_MS)
                } else if (i % 4 === 2){

                    setTimeout(()=>{
                        let idx = animations[i][0]

                        arrayBars[idx].textContent = animations[i][1] 
                        arrayBars[idx].style.height = animations[i][1] +  "px"
                        arrayBars[idx].style.backgroundColor = "blue"
                    }, i * ANIMATION_SPEED_MS)
                }

                if (i === animations.length -1){
                    setTimeout(()=>{
                        arrayBars[0].style.backgroundColor = "purple"
                        this.completeSort()

                    }, i * ANIMATION_SPEED_MS)
                }


            } 





            }




            



            //     const isColorChange = i % 3 !== 2;
            //     if (isColorChange) {
            //       const [barOneIdx, barTwoIdx] = animations[i];
            //       const barOneStyle = arrayBars[barOneIdx].style;
            //       const barTwoStyle = arrayBars[barTwoIdx].style;
            //       const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            //       setTimeout(() => {
            //         barOneStyle.backgroundColor = color;
            //         barTwoStyle.backgroundColor = color;
            //       }, i * ANIMATION_SPEED_MS);
            //     } else {
            //       setTimeout(() => {
            //         const [barOneIdx, newHeight] = animations[i];
            //         const barOneStyle = arrayBars[barOneIdx].style;
            //         barOneStyle.height = `${newHeight}px`;
            //         if (i === animations.length - 1){
            //           this.completeSort()
            //         }
            //       }, i * ANIMATION_SPEED_MS);
  
            //     }              
            //   }


            
        

    render(){



        return (



        <div>

            <div>
                <Navbar style={{}} color="dark" className="navbar-dark navbar-expand-sm" light expand="md">
                <NavbarBrand href="" onClick={this.resetArray}>Generate New Array</NavbarBrand>
                <div style={{display: "inline-block", width: "10%"}}></div>

                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" style={{}} navbar>
                        <NavItem classNames="nav-item-padding">
                            <NavLink style={{width: "15%",}} href="/components/"></NavLink>
                        </NavItem>
                        
                        <NavItem classNames="nav-item-padding">
                            <NavLink style={{width: "15%",}} href="/components/">Change Array Size</NavLink>
                        </NavItem>
                        
                        {/* <Typography gutterBottom>pretto.fr</Typography> */}
                        <PrettoSlider 
                        onChange={(e, val) => {
                            this.resetArray()
                            this.setState({sliderValue: val})
                        }} 
                        // onDragStop={this.sliderListener}
                        onClick={this.sliderListener} style={{margin: "5%",}} 
                        valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />            
                        
                        <NavItem classNames="nav-item-padding">
                            <NavLink id="mergeSort" style={{cursor: "pointer"}} onClick={ () => this.mergeSort() }>Merge Sort</NavLink>
                        </NavItem>
                        {/* <NavItem classNames="nav-item-padding">
                            <NavLink id="quickSort" style={{cursor: "pointer"}} onClick={ () => this.quickSort(this.state.array) }>Quick Sort</NavLink>
                        </NavItem>
                        <NavItem classNames="nav-item-padding">
                            <NavLink id="heapSort" style={{cursor: "pointer"}} onClick={ () => this.heapSort() }>Heap Sort</NavLink>
                        </NavItem> */}
                        <NavItem classNames="nav-item-padding">
                            <NavLink id="bubbleSort" style={{cursor: "pointer"}} onClick={ () => this.bubbleSort() }>Bubble Sort</NavLink>
                        </NavItem>

                        <UncontrolledDropdown style={{float: "right"}} nav inNavbar>
                            <DropdownToggle nav caret>
                            Options
                            </DropdownToggle>

                            <DropdownMenu right>
                            <DropdownItem>
                                <NavLink style={{color:"black"}} href="https://github.com/reactstrap/reactstrap">Home</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink style={{color:"black"}} href="https://github.com/reactstrap/reactstrap">Feedback</NavLink>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <NavLink style={{color:"black"}} href="" onClick={this.resetArray}>Reset</NavLink>
                            </DropdownItem>
                            </DropdownMenu>

                        </UncontrolledDropdown>
                    </Nav>
                    {/* <NavbarText>Simple Text</NavbarText> */}
                </Collapse>
                </Navbar>
            </div>

            <div className="array-container">
            <>
                {this.state.array.map((value, idx)=> (
                    <div 
                        className="array-bar" 
                        style={{ backgroundColor: "blue", color: "white", textShadow: "2px 2px 4px #000000", height: `${value}px`, width: `${ (window.innerWidth - 400 ) / this.state.sliderValue}px`, }} 
                        id={idx}
                        key={idx} >{ (window.innerWidth * .9 ) / this.state.sliderValue > 35 ? value : "'"}
                    </div>
                
                ))}
            </>
            </div>

        </div>
    
        );


    }



}

export default Header; // Don’t forget to use export default!