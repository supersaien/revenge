        /*    
        @licstart  The following is the entire license notice for the 
        JavaScript code in this page.

        Copyright (C) 2020  Bonjour

        The JavaScript code in this page is free software: you can
        redistribute it and/or modify it under the terms of the GNU
        General Public License (GNU GPL) as published by the Free Software
        Foundation, either version 3 of the License, or (at your option)
        any later version.  The code is distributed WITHOUT ANY WARRANTY;
        without even the implied warranty of MERCHANTABILITY or FITNESS
        FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

        As additional permission under GNU GPL version 3 section 7, you
        may distribute non-source (e.g., minimized or compacted) forms of
        that code without the copy of the GNU GPL normally required by
        section 4, provided you include this license notice and a URL
        through which recipients can access the Corresponding Source.   


        @licend  The above is the entire license notice
        for the JavaScript code in this page.
        */

var position_y;
var position_x;
var screen;
var telepheric_left;
var telepheric_right;
function gravity()
    {
    // generic gravity
    if (position_y<206)
        {
        position_y=position_y+1;
        postMessage({position_y: position_y});
        }
    //specific gravity
    if (position_y>=206 && position_x<=15 && screen==1)
        {
        position_y=position_y+1;
        postMessage({position_y: position_y});
        }
    if (position_y>=206 && position_x>=314 && screen==6 && telepheric_left==false)
        {
        position_y=position_y+1;
        postMessage({position_y: position_y});
        }
    if (position_y>=206 && position_x>=143 && screen==7 && telepheric_left==true)
        {
        position_y=position_y+1;
        postMessage({position_y: position_y});
        }
    if (position_y>=206 && position_x<=360-143-15 && screen==10 && telepheric_right==true)
        {
        position_y=position_y+1;
        postMessage({position_y: position_y});
        }
    }
self.onmessage = function(event) 
    {
    position_y=event.data.position_y;
    position_x=event.data.position_x;
    screen=event.data.screen;
    telepheric_left=event.data.telepheric_left;
    telepheric_right=event.data.telepheric_right;
    self.setTimeout(gravity,9);
    }




