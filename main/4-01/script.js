       //JS used for executing HTML code 
       const heading = document.querySelector('.heading')

       //document is a parent of HTML file, everything inside html is a child of document 

       //in Web dev its highly recommended to use const, because it gives higher security, because somebody else cannot further change value 

       //we'll not change the heading, we'll change content of tag 
       
       const resetButton = document.querySelector('.reset-btn')
       //console.log(resetButton)

       const gameCells = document.querySelectorAll('.cell')
       //console.log(gameCells)

       //add event listener to each cell 
       //event listener works on single element, so were targetting it individually 
       function cellHandler(){
        console.log("clicked")
    }

       for(cell of gameCells){
           cell.addEventListener('click', cellHandler)
           //when you click on the cell, it displays clicked in console
       }

       var isXturn = true;
       var count = 0;

       const checkGameStatus=()=>{
           //console.log("checking")
           //console.log(gameCells[0].classList)

           //gamecell is an array so use indexing
           const index0ClassList = gameCells[0].classList;
           const index1ClassList = gameCells[1].classList;
           const index2ClassList = gameCells[2].classList;
           const index3ClassList = gameCells[3].classList;
           const index4ClassList = gameCells[4].classList;
           const index5ClassList = gameCells[5].classList;
           const index6ClassList = gameCells[6].classList;
           const index7ClassList = gameCells[7].classList;
           const index8ClassList = gameCells[8].classList;

           if(index0ClassList.contains('O')){
               if(index1ClassList.contains('O') && index2ClassList.contains('O')){
                   alert('O won')

                   //strikethrough with JS 
                   //✅research on strike method 
               }
           }
       }

       function cellHandler(event){
        //when we click on the cell 
        //pointerEvent object will show up on console 
        //console.log("event",event)

        //this peice of code targets a specific cell
        //console.log(event.target.classList)
        const classList = event.target.classList
        //check if length>1 then dont get inside the Xturn loop
        //this removes the bug when you click twice on the same field it can be changed 

        if(classList.length > 1){
            return
        }

        if(isXturn)
        {
        //if Xturn is true then print X 
        classList.add('X')
          isXturn=false //turn isXturn=false 
          heading.textContent="O's Turn"
        }
        else
        {
            //when X is true then print O 
            classList.add('O')
            isXturn=true
            heading.textContent="X's turn"
        }

        count= count + 1
        console.log("count", count)
        if(count >= 5){
            checkGameStatus()
        }

       }

       for(cell of gameCells){
           cell.addEventListener('click', cellHandler)
       }

       const resetHandler=()=>{
           window.location.reload()
       }

       //when you click on reset button the game resets 
       resetButton.addEventListener('click', resetHandler)


