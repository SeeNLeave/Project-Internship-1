var list1 = [];
		var list2 = [];

		var n = 1;
		var x = 0;

		function AddRow(){
			x = document.getElementById("fname").value;
		 if (x = " ") {
			 alert("No values entered");
			
		 }
        else(x != "");{
			var AddRown = document.getElementById('table1');
			var NewRow = AddRown.insertRow(n);

			list1[x] = document.getElementById("fname").value;
			list2[x] = document.getElementById("ID").value;

			var cell1 = NewRow.insertCell(0);
			var cell2 = NewRow.insertCell(1);			
			

			cell1.innerHTML = list1[x];                                   
			cell2.innerHTML = list2[x];                   

            d1=list1[x];                                                
            d2=list2[x];                                        
            var btn = document.createElement("button");                                     
            btn.innerText="Information";
            btn.style.background="red";    
			btn.addEventListener("click", function(){
			alert("Name " + d1 + "   " + "ID: " + d2);
			});                                           
            var cell3 = NewRow.appendChild(btn);
                                                
			n++;
			x++;
		}


		
		   }

		

	
		

		function Clear(){ 
			document.getElementById("fname").value = "";     
			document.getElementById("ID").value =""; 
		}                                
		



