<script type="text/javascript">
<!--
// Errorflag Assignments: 1 = giftSide: 2 = groomSide giftType: 3 = bridSide giftType:

//assignments
var giftType = "";
var guestName = "";
var moreGuests = "yes";
var groomName = "";
var brideName = "";
var giftSide = "";
var groomGuestCount = 0;
var brideGuestCount = 0;
var groomGuestName = "";
var brideGuestName = "";
var groomSideGuestAccum = "";
var brideSideGuestAccum = "";
var toasterCount = 0;
var silverwareCount = 0;
var stemwareCount = 0;
var toasterGuestAccum = "";
var silverwareGuestAccum = "";
var stemwareGuestAccum = "";
var multToasterAccum = "";
var multSilverwareAccum = "";
var multStemwareAccum = "";
var errorFlag = 0;
//Out of loop inputs (I can remove naming if the client so desires)
groomName = prompt("What is the grooms name?", "");
brideName = prompt("What is the brides name", "");
//calculations
while (moreGuests == "yes")
{//beginning loop brace
   giftSide = prompt("Is the gift for the groom or the bride?, groom/bride", "groom");
   if (giftSide == "groom")
   {// if groom side beginning brace
      giftType = prompt("What is the gift? (toaster, silverware, stemware, other)", "toaster");
       switch(giftType)
       {
         case "toaster":
            groomGuestName = prompt("What is the grooms guest's name?", "");
            guestName = groomGuestName;
            groomGuestCount = groomGuestCount + 1;
            toasterCount = toasterCount + 1;
               if (groomGuestCount == 1)
               {
                  groomSideGuestAccum = groomName + "'s side:  <br>1.  " + groomGuestName + ":  " + giftType;
               }  
               else
               {
                  groomSideGuestAccum = groomSideGuestAccum + "<br>" + groomGuestCount  + ".  " + groomGuestName + ":  " + giftType;
               }
                  if (toasterCount == 1)
                  {
                     multToasterAccum = "Multiple toasters by:  <br>" + guestName;
                  }
                  else
                  {
                     multToasterAccum = multToasterAccum + "<br>" + guestName;
                  }  
                  break;
         case "silverware":
            groomGuestName = prompt("What is the grooms guest's name?", "");
            guestName = groomGuestName;
            groomGuestCount = groomGuestCount + 1;
            silverwareCount = silverwareCount + 1;
               if (groomGuestCount == 1)
                {
                    groomSideGuestAccum = groomName + "'s side:  <br>1.  " + groomGuestName + ":  " + giftType;
                }  
                else
                {
                    groomSideGuestAccum = groomSideGuestAccum + "<br>" + groomGuestCount  + ".  " + groomGuestName + ":  " + giftType
                }
                   if (silverwareCount == 1)
                   {
                       multSilverwareAccum = "Multiple silverware by:  <br>" + guestName;
                   }
                   else
                  {
                      multSilverwareAccum = multSilverwareAccum + "<br>" + guestName;
                  }  
                  break;

         case "stemware":
            groomGuestName = prompt("What is the grooms guest's name?", "");
            guestName = groomGuestName;
            groomGuestCount = groomGuestCount + 1;
            stemwareCount = stemwareCount + 1;
               if (groomGuestCount == 1)
               {
                   groomSideGuestAccum = groomName + "'s side:  <br>1.  " + groomGuestName + ":  " + giftType;
               }  
               else
               {
                  groomSideGuestAccum = groomSideGuestAccum + "<br>" + groomGuestCount  + ".  " + groomGuestName + ":  " + giftType
               }
                  if (stemwareCount == 1)
                  {
                     multStemwareAccum = "Multiple silverware by:  <br>" + guestName;
                  }
                  else
                  {
                     multStemwareAccum = multStemwareAccum + "<br>" + guestName;
                  }  
                  break;

         case "other":
            groomGuestName = prompt("What is the grooms guest's name?", "");
            guestName = groomGuestName;
            groomGuestCount = groomGuestCount + 1;
            giftType = prompt("Please list the specific type of gift now, for example (House, Airplane, Dog, etc.),", ""); 
               if (groomGuestCount == 1)
               {
                  groomSideGuestAccum = groomName + "'s side:  <br>1.  " + groomGuestName + ":  " + giftType;
               }  
               else
               {
               groomSideGuestAccum = groomSideGuestAccum + "<br>" + groomGuestCount  + ".  " + groomGuestName + ":  " + giftType
               }
               break;

         default:
            errorFlag = 2;
            alert("You were suppose to enter either  (toaster, silverware, stemware, other) however, you entered " +giftType + ". Please restart this record to correct the gift type. Thank you.");
            break;
       }//switch end brace
   }// if groom side ending brace   
   else if (giftSide == "bride")
   {//if bride side beginning brace
            giftType = prompt("What is the gift? (toaster, silverware, stemware, other)", "toaster");
       switch(giftType)
       {
         case "toaster":
            brideGuestName = prompt("What is the brides guest's name?", "");
            guestName = brideGuestName;
            brideGuestCount = brideGuestCount + 1;
            toasterCount = toasterCount + 1;
               if (brideGuestCount == 1)
               {
                  brideSideGuestAccum = brideName + "'s side:  <br>1.  " + brideGuestName + ":  " + giftType;
               }  
               else
               {
                  brideSideGuestAccum = brideSideGuestAccum + "<br>" + brideGuestCount  + ".  " + brideGuestName + ":  " + giftType;
               }
                  if (toasterCount == 1)
                  {
                     multToasterAccum = "Multiple toasters by:  <br>" + guestName;
                  }
                  else
                  {
                     multToasterAccum = multToasterAccum + "<br>" + guestName;
                  }  
                  break;
         case "silverware":
            brideGuestName = prompt("What is the brides guest's name?", "");
            guestName = brideGuestName;
            brideGuestCount = brideGuestCount + 1;
            silverwareCount = silverwareCount + 1;
               if (brideGuestCount == 1)
               {
                  brideSideGuestAccum = brideName + "'s side:  <br>1.  " + brideGuestName + ":  " + giftType;
               }  
               else
               {
                  brideSideGuestAccum = brideSideGuestAccum + "<br>" + brideGuestCount  + ".  " + brideGuestName + ":  " + giftType;
               }
                  if (silverwareCount == 1)
                  {
                      multSilverwareAccum = "Multiple silverware by:  <br>" + guestName;
                  }
                  else
                  {
                     multSilverwareAccum = multSilverwareAccum + "<br>" + guestName;
                  }  
                  break;

         case "stemware":
            brideGuestName = prompt("What is the brides guest's name?", "");
            guestName = brideGuestName;
            brideGuestCount = brideGuestCount + 1;
            stemwareCount = stemwareCount + 1;
               if (brideGuestCount == 1)
               {
                  brideSideGuestAccum = brideName + "'s side:  <br>1.  " + brideGuestName + ":  " + giftType;
               }  
               else
               {
                  brideSideGuestAccum = brideSideGuestAccum + "<br>" + brideGuestCount  + ".  " + brideGuestName + ":  " + giftType;
               }
                  if (stemwareCount == 1)
                  {
                      multStemwareAccum = "Multiple silverware by:  <br>" + guestName;
                  }
                  else
                  {
                     multStemwareAccum = multStemwareAccum + "<br>" + guestName;
                  }  
                  break;

         case "other":
            brideGuestName = prompt("What is the brides guest's name?", "");
            guestName = brideGuestName;
            brideGuestCount = brideGuestCount + 1;
            giftType = prompt("Please list the specific type of gift now, for example (House, Airplane, Dog, etc.),", ""); 
               if (brideGuestCount == 1)
               {
                  brideSideGuestAccum = brideName + "'s side:  <br>1.  " + brideGuestName + ":  " + giftType;
               }  
               else
               {
                  brideSideGuestAccum = brideSideGuestAccum + "<br>" + brideGuestCount  + ".  " + brideGuestName + ":  " + giftType;
               }
               break;

         default:
            errorFlag = 3;
            alert("You were suppose to enter either  (toaster, silverware, stemware, other) however, you entered " +giftType + ". Please restart this record to correct the gift type. Thank you.");
         break;
       }//switch end brace
       //alert(brideSideGuestAccum);
   
   }// if bride side ending brace
   else 
   {// errorFlag beginning brace
      errorFlag = 1;
      alert("You were suppose to choose either bride or groom however, you entered " +giftSide+ ". Please input this correctly. Thank you.")
   }// errorFlag ending brace
moreGuests = prompt("Do you have more guests? yes / no", "yes");
}//ending loop brace
//Outputs
//alert("errorFlag");
   document.write("<p>" + groomSideGuestAccum + "</p>");
   document.write("<p>" + brideSideGuestAccum + "</p>");
      if (toasterCount > 1)
      {
        document.write("<p>" + multToasterAccum + "</p>");
      }
      else
      {
         document.write("<p>There are no multiple gifts for toasters.</p>")
      }
      if (silverwareCount > 1)
      {
         document.write("<p>" + multSilverwareAccum + "</p>");  
      }
      else
      {
         document.write("<p>There are no multiple gifts for silverware.</p>")
      }
      if (stemwareCount > 1)
      {
         document.write("<p>" + multStemwareAccum + "</p>");
      }
      else
      {
         document.write("<p>There are no multiple gifts for stemware.</p>")

      }

// -->
</script>