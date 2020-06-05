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
var screen;
var position_x;
var position_y;
var last_move;
var jump;
var punch;
var kick;
var fake_y=206;
function jumper() //jump or uppercut
    {
    if (jump==true && screen!=14 && screen!=20)
        {
        if (position_y>150)
            {
            position_y=position_y-1;
            }
        if (last_move=="right" && position_y>150)
            {
            position_x=position_x+1;
            }
        if (last_move=="left" && position_y>150)
            {
            position_x=position_x-1;
            }
        postMessage({position_y: position_y, position_x: position_x, punch: punch, kick: kick});
        }
    if (jump==true && (screen==14 || screen==20) && position_x<316) //jump or uppercut screen 14 and screen 20
        {
        if (position_y>150)
            {
            position_y=position_y-1;
            }
        if (last_move=="right" && position_y>150)
            {
            position_x=position_x+1;
            }
        if (last_move=="left" && position_y>150)
            {
            position_x=position_x-1;
            }
        postMessage({position_y: position_y, position_x: position_x, punch: punch, kick: kick});
        }
    if (jump==false && (punch==true || kick==true) && screen!=14 && screen!=20) //punch or kick
        {
        if (fake_y>150)
            {
            fake_y=fake_y-1;
            }
        if (last_move=="right" && fake_y>150)
            {
            position_x=position_x+1;
            }
        if (last_move=="left" && fake_y>150)
            {
            position_x=position_x-1;
            }
        if (fake_y==150)
            {
            fake_y=206;
            punch=false;
            kick=false;
            }
        postMessage({position_y: position_y, position_x: position_x, punch: punch, kick: kick});
        }
    if (jump==false && (punch==true || kick==true) && (screen==14 || screen==20) && position_x<316) //punch or kick screen 14
        {
        if (fake_y>150)
            {
            fake_y=fake_y-1;
            }
        if (last_move=="right" && fake_y>150)
            {
            position_x=position_x+1;
            }
        if (last_move=="left" && fake_y>150)
            {
            position_x=position_x-1;
            }
        if (fake_y==150)
            {
            fake_y=206;
            punch=false;
            kick=false;
            }
        postMessage({position_y: position_y, position_x: position_x, punch: punch, kick: kick});
        }

    }
self.onmessage = function(event) 
    {
    position_y=event.data.position_y;
    position_x=event.data.position_x;
    last_move=event.data.last_move;
    jump=event.data.jump;
    punch=event.data.punch;
    kick=event.data.kick;
    screen=event.data.screen;
    self.setTimeout(jumper,10);
    }


