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
// IMAGES
var player_right=new Image();
var player_left=new Image();
var background1=new Image();
var floor1=new Image();
var ship=new Image();
var cam3=new Image();
var fireball_reverse=new Image();
var fire=new Image();
var cannon=new Image();
var metal=new Image();
var enemy_left_grey=new Image();
var enemy_left_red=new Image();
var computer=new Image();
var button=new Image();
var button_elevator=new Image();
var ray=new Image();
var room_red=new Image();
var room_blue=new Image();
var elevator=new Image();
var boom=new Image();
function preloader() 
    {
    if (document.images) 
        {
        player_right.setAttribute("src", "ninja_full.png");
        player_left.setAttribute("src", "ninja_full_reverse.png");
        background1.setAttribute("src", "planet_3_0.png");
        floor1.setAttribute("src", "sci_fi_bg1.jpg");
        ship.setAttribute("src", "ship-01-blue.png");
        cam3.setAttribute("src", "3.png");
        fireball_reverse.setAttribute("src", "fireball-side-reverse.png");
        fire.setAttribute("src", "fire1_64.png");
        cannon.setAttribute("src", "Cannon3.png");
        metal.setAttribute("src", "misslescararm.jpg");
        enemy_left_grey.setAttribute("src", "ninja_grey_reverse.png");
        enemy_left_red.setAttribute("src", "ninja_red_reverse.png");
        computer.setAttribute("src", "thinkpad.png");
        button.setAttribute("src", "button.png");
        button_elevator.setAttribute("src", "button_elevator.png");
        ray.setAttribute("src", "electric-ray.png");
        room_red.setAttribute("src", "backred.png");
        room_blue.setAttribute("src", "backdarkblue.png");
        elevator.setAttribute("src", "elevator.png");
        boom.setAttribute("src", "sparkling-fireball.png");
	    }
    }
function addLoadEvent(func) 
    {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') 
        {
		window.onload = func;
	    } 
    else 
        {
    	window.onload = function() 
            {
			if (oldonload) 
                {
				oldonload();
			    }
			func();
		    }
    	}
    }
//VARIABLES
var interval;
var screen=-1;
var power=100;
var position_x=164;
var position_y=206;
var velocity_right=0;
var velocity_left=0;
var last_move='right';
var run_animation_right=0;
var run_animation_left=0;
var jump=false;
var bend=false;
var punch=false;
var kick=false;
var last_screen;
var time;
var timescreen3;
var gameover=false;
var cam_destroyed=false;
var honor=0;
var timeanimation;
var enemy0_destroyed=false;
var enemy1_destroyed=false;
var enemy2_destroyed=false;
var enemy3_destroyed=false;
var enemy4_destroyed=false;
var telepheric_left=false;    
var telepheric_called_left=false;
var telepheric_move_to_right=false;
var telepheric_right=false; 
var telepheric_called_right=false;
var telepheric_move_to_left=false;
var position_old_telepheric_x;
var elevator_up=true;
var elevator_down=false;
var elevator_going_up=false;
var elevator_going_down=false;
var no_move=false;
var in_computer=false;
var stop_nuclear_fusion_container_now=false;
var stop_nuclear_fusion_container_3_min=false;    
var terminal_available=true;
var command_executed=false;    
var going_out=false;
var final_done=false;
// CANVAS
var canvas = document.getElementById('canvas');
if (canvas.getContext) 
    {
    var ctx = canvas.getContext('2d');
    }
function screens()
    {
    if (jump==false && punch==false && kick==false)
        {
        if (screen==1 && position_x>349){screen=2;position_x=-10;last_screen=1;honor=honor+10;}
        if (screen==2 && position_x<-29){screen=1;position_x=340;last_screen=2;/*honor=honor-10;*/}
        if (screen==2 && position_x>349){screen=3;position_x=-10;last_screen=2;timescreen3=time;honor=honor+10;}
        if (screen==3 && position_x<-29){screen=2;position_x=340;last_screen=3;/*honor=honor-10;*/}
        if (screen==3 && position_x>349){screen=4;position_x=-10;last_screen=3;honor=honor+10;}
        if (screen==4 && position_x<-29){screen=3;position_x=340;last_screen=4;/*honor=honor-10;*/}
        if (screen==4 && position_x>349){screen=5;position_x=-10;last_screen=4;honor=honor+10;}
        if (screen==5 && position_x<-29){screen=4;position_x=340;last_screen=5;/*honor=honor-10;*/}
        if (screen==5 && position_x>349){screen=6;position_x=-10;last_screen=5;honor=honor+10;}
        if (screen==6 && position_x<-29){screen=5;position_x=340;last_screen=6;/*honor=honor-10;*/}
        if (screen==6 && position_x>349 && telepheric_left==true){screen=7;position_x=-10;last_screen=6;honor=honor+10;}
        if (screen==7 && position_x<-29 && telepheric_left==true){screen=6;position_x=340;last_screen=7;/*honor=honor-10;*/}
        //telepheric
        //...
        if (screen==10 && position_x>349){screen=11;position_x=-10;last_screen=10;honor=honor+10;}
        if (screen==11 && position_x<-29){screen=10;position_x=340;last_screen=11;/*honor=honor-10;*/}
        if (screen==11 && position_x>349){screen=12;position_x=-10;last_screen=11;honor=honor+10;}
        if (screen==12 && position_x<-29){screen=11;position_x=340;last_screen=12;/*honor=honor-10;*/}
        if (screen==12 && position_x>349){screen=13;position_x=-10;last_screen=12;honor=honor+10;}
        if (screen==13 && position_x<-29){screen=12;position_x=340;last_screen=13;/*honor=honor-10;*/}
        if (screen==13 && position_x>349){screen=14;position_x=-10;last_screen=13;honor=honor+10;}
        if (screen==14 && position_x<-29){screen=13;position_x=340;last_screen=14;/*honor=honor-10;*/}
        //elevator
        //...
        if (screen==17 && position_x>349){screen=18;position_x=-10;last_screen=17;honor=honor+10;}
        if (screen==18 && position_x<-29){screen=17;position_x=340;last_screen=18;/*honor=honor-10;*/}
        if (screen==18 && position_x>349){screen=19;position_x=-10;last_screen=18;honor=honor+10;}
        if (screen==19 && position_x<-29){screen=18;position_x=340;last_screen=19;/*honor=honor-10;*/}
        if (screen==19 && position_x>349){screen=20;position_x=-10;last_screen=19;honor=honor+10;}
        if (screen==20 && position_x<-29){screen=19;position_x=340;last_screen=20;/*honor=honor-10;*/}
        }
    }
function draw() 
    {
    screens();
    //clean canvas screen
    canvas.width=canvas.width;
    //screen
    ctx.beginPath();
    if(screen==-1)
        {
        ctx.fillStyle = 'red';
        ctx.fillRect(0,0,360,360); //background
        ctx.fillStyle = 'black';
        ctx.font = "30px arial";
        ctx.fillText("Revenge:", 10, 30);
        ctx.font = "20px arial";
        ctx.fillText("the path of the good ninja", 10, 60);
        ctx.fillText("Controls", 10, 90);
        ctx.fillText("-------------------------------------", 10, 110);
        ctx.fillText("up arrow -> jump", 10, 130);
        ctx.fillText("down arrow -> bend", 10, 150);
        ctx.fillText("left arrow -> walk to left", 10, 170);
        ctx.fillText("right arrow -> walk to right", 10, 190);
        ctx.fillText("z -> fly uppercut", 10, 210);
        ctx.fillText("x -> run punch", 10, 230);
        ctx.fillText("c -> run kick", 10, 250);
        ctx.fillText("enter -> start/action", 10, 270);
        ctx.fillText("escape -> leave game", 10, 290);
        ctx.fillText("-------------------------------------", 10, 310);
        ctx.font = "30px arial";
        ctx.fillText("Press enter to start", 10, 345);
        ctx.fill();
        }
    if(screen==0 && going_out==false)
        {
        ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
        ctx.drawImage(floor1,480,180,960,450,40,270,320,90);
        if (timeanimation<161)
            {
            ctx.drawImage(ship,0,0,125,76,(-125+Math.floor((timeanimation).toFixed(2))),159,125,76);
            }
        if (timeanimation>160 && timeanimation<=210)
            {
            ctx.drawImage(ship,0,0,125,76,35,159+Math.floor((timeanimation).toFixed(2))-161,125,76);
            }
        if(timeanimation>210 && timeanimation<265)
            {
            ctx.fillStyle = 'white';
            ctx.font = "62px arial";
            ctx.fillText("Go!" , 135, 180);
            ctx.drawImage(ship,0,0,125,76,35,209,125,76);
            }
        if(timeanimation>264)
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;
            ctx.drawImage(ship,0,0,125,76,35,209,125,76);
            honor=honor+1000;
            screen=1;
            }
        }
    if(screen==0 && going_out==true)
        {
        ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
        ctx.drawImage(floor1,480,180,960,450,40,270,320,90);
        if (timeanimation<121)
            {
            ctx.drawImage(ship,0,0,125,76,35,Math.floor((159-timeanimation+209-161).toFixed(2)),125,76);
            }
        if (timeanimation>120 && timeanimation<201)
            {
            ctx.drawImage(ship,0,0,125,76,35,Math.floor((159-120+209-161).toFixed(2)),125,76);
            }
        if (timeanimation>200 && timeanimation<351)
            {
            ctx.drawImage(ship,0,0,125,76,(Math.floor((159+timeanimation+209-161-360).toFixed(2))),
Math.floor((280-timeanimation).toFixed(2)),125,76);
            }
        if(timeanimation>350)
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;
            timeanimation=0;
            init_timeanimationworker();
            if (command_executed==true && stop_nuclear_fusion_container_3_min==true)
                {
                honor=honor+10000;
                screen=23;
                }
            else
                {
                honor=honor-100000;
                screen=21;
                }  
            }
        }
    if(screen==1)
        {
        ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
        ctx.drawImage(floor1,480,180,960,450,40,270,320,90);
        ctx.drawImage(ship,0,0,125,76,35,209,125,76);
        ctx.fillStyle = 'black';
        ctx.font = "14px arial";
        }
    if(screen==2)
        {
        if (gameover==false && position_y<152 && position_x>130 && position_x<180 && jump==true && punch==true){cam_destroyed=true;honor=honor+500} // destroy cam
        ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
        ctx.drawImage(floor1,480,180,960,450,0,270,360,90);
        ctx.fillStyle = '#222222'; //room ruf
        ctx.fillRect(350,90,10,10); //room ruf
        ctx.fillStyle = '#084384'; //room blue
        ctx.fillRect(350,100,10,170); //room blue
        if (cam_destroyed==false)
            {
            ctx.drawImage(cam3,0,0,32,32,164,129,32,32); 
            }
        if (cam_destroyed==true) //fire cam
            {
            ctx.drawImage(cam3,0,0,32,32,164,129,32,32); 
            var randomfirecol=Math.floor(Math.random()*Math.floor(10));
            var randomfirerow=Math.floor(Math.random()*Math.floor(6));
            ctx.drawImage(fire,0+randomfirecol*64,0+randomfirerow*64,64,64,164-16,129-16-16,64,64);
            }
        }
    if(screen==3)
        {
        //screen 3 contain more code at end of this function
        ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
        ctx.fillStyle = '#222222'; //room ruf
        ctx.fillRect(0,90,360,10); //room ruf
        ctx.drawImage(room_blue,0,0,914,508,0,100,360,170); //room blue
        ctx.fillStyle = '#222222'; //floor
        ctx.fillRect(0,270,360,90); //floor
        ctx.drawImage(metal,0,0,256,256,165,206,64,64);
        ctx.fillStyle = 'black';
        ctx.font = "12px courier";
        ctx.fillText("Fragile", 173, 235);
        ctx.fillStyle = 'black';
        ctx.font = "14px arial";
        }
    if(screen==4)
        {
        ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
        ctx.fillStyle = '#222222'; //room_red ruf
        ctx.fillRect(0,90,360,10); //room_red ruf
        ctx.drawImage(room_blue,0,0,914,508,0,100,360,170); //room blue
        ctx.fillStyle = '#222222'; //floor
        ctx.fillRect(0,270,360,90); //floor
        ctx.drawImage(cannon,0,0,276,202,25,168,138,101); //cannon
        ctx.drawImage(floor1,480,180,960,420,75,168,101,101); //cannon
        ctx.fillStyle = 'black';
        ctx.font = "12px arial";
        ctx.fillText("Plasma cannon", 82, 222);
        //enemy0
        if(position_x<297 && enemy0_destroyed==false)
            {
            ctx.drawImage(enemy_left_grey,32*2,72*2,32,72,307,222,32,72); //enemy
            ctx.fillStyle = '#444444'; //rifle
            ctx.fillRect(307,237,25,2); //rifle
            ctx.fill(); //rifle
            }
        if(position_x>298 && enemy0_destroyed==false)
            {
            enemy0_destroyed=true;
            honor=honor+1000;
            }
        if(enemy0_destroyed==true)
            {
            ctx.drawImage(enemy_left_grey,(0+32*4-5),320,58,72,307,206,58,72); //enemy destroyed
            }
        init_timeanimationworker();
        if(timeanimation<160 && enemy0_destroyed==false)
            {
            ctx.drawImage(fireball_reverse,0,0,256,56,297-(timeanimation*2),235,21,5); //fire shot
            if (position_x<297-(timeanimation*2) && position_x+32>297-(timeanimation*2) && position_y>175 && kick==false){power=power-10;}
            }
        else
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;        
            init_timeanimationworker();
            timeanimation=0;
            }
        }
    if(screen==5)
        {
        ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
        //ctx.drawImage(floor1,480,180,960,450,0,270,360,90);
        ctx.fillStyle = '#222222'; //room ruf
        ctx.fillRect(0,90,360,10); //room ruf
        ctx.drawImage(room_blue,0,0,914,508,0,100,360,170); //room blue
        ctx.fillStyle = '#222222'; //floor
        ctx.fillRect(0,270,360,90); //floor
        ctx.drawImage(metal,0,0,256,256,165,206,64,64); 
        ctx.drawImage(metal,0,0,256,256,235,206,64,64);
        ctx.drawImage(metal,0,0,256,256,205,142,64,64);
        ctx.fillStyle = 'black';
        ctx.font = "12px courier";
        ctx.fillText("Fragile", 213, 169);
        ctx.font = "12px courier";
        ctx.fillText("Fragile", 174, 235);
        ctx.fillStyle = 'black';
        ctx.font = "14px arial";
        //ctx.fillText("ORBITAL STATION R428", 140, 305);
        //enemy1
        if(position_x<297 && enemy1_destroyed==false)
            {
            ctx.drawImage(enemy_left_grey,32*2,72*2,32,72,307,222,32,72); //enemy
            ctx.fillStyle = '#444444'; //rifle
            ctx.fillRect(307,237,25,2); //rifle
            ctx.fill(); //rifle
            }
        if(position_x>298 && enemy1_destroyed==false)
            {
            enemy1_destroyed=true;
            honor=honor+1000;
            }
        if(enemy1_destroyed==true)
            {
            ctx.drawImage(enemy_left_grey,(0+32*4-5),320,58,72,307,206,58,72); //enemy destroyed
            }
        init_timeanimationworker();
        if(timeanimation<160 && enemy1_destroyed==false)
            {
            ctx.drawImage(fireball_reverse,0,0,256,56,297-(timeanimation*2),235,21,5); //fire shot
            if (position_x<297-(timeanimation*2) && position_x+32>297-(timeanimation*2) && position_y>175 && kick==false){power=power-10;}
            }
        else
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;        
            init_timeanimationworker();
            timeanimation=0;
            }
        }
    if(screen==6)
        {
        ctx.drawImage(background1,0,0,1024,1024,0,0,360,360); //background
        ctx.fillStyle = '#222222'; //room ruf
        ctx.fillRect(0,90,10,10); //room ruf
        ctx.fillStyle = '#084384'; //room blue
        ctx.fillRect(0,100,10,170); //room blue
        ctx.drawImage(floor1,480,180,960,450,0,270,320,90); //floor
        ctx.drawImage(floor1,480,180,960,420,250,108,51,161); //tower
        ctx.drawImage(button,0,0,83,106,255,198,41,53); //button
        ctx.fillStyle = '#222222'; //wire
        ctx.fillRect(302,108,59,2); //wire
        ctx.fill(); //wire
        if ((telepheric_called_left==false || telepheric_called_left==true) && telepheric_left==false)
            {
            ctx.fillStyle = '#FF0000'; //led red
            ctx.fillRect(314,260,6,10); //led red 
            ctx.fill(); //led red 
            }
        if (telepheric_called_left==true && (time.toFixed(2))%1==0 && telepheric_left==false)
            {
            ctx.fillStyle = '#111111'; //led red intermitence
            ctx.fillRect(314,260,6,10); //led red intermitence
            ctx.fill(); //led red intermitence
            }
        if ((telepheric_called_left==false || telepheric_called_left==true) && telepheric_left==true)
            {
            ctx.fillStyle = '#00FF00'; //led green 
            ctx.fillRect(314,260,6,10); //led green 
            ctx.fill(); //led green 
            }
        if (telepheric_called_left==true && 800-timeanimation>320 && telepheric_left==false)
            {        
            ctx.fillStyle = '#777777'; //platfrom telepheric
            ctx.fillRect(800-timeanimation,270,150,30); //platfrom telepheric
            ctx.fill(); //platfrom telepheric
            }
        if (telepheric_called_left==true && 800-timeanimation<=321 && telepheric_left==false)
            {
            telepheric_left=true;
            ctx.fillStyle = '#777777'; //platfrom telepheric
            ctx.fillRect(321,270,150,30); //platfrom telepheric
            ctx.fill(); //platfrom telepheric
            }
        if (telepheric_left==true)
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;        
            init_timeanimationworker();
            timeanimation=-479;
            ctx.fillStyle = '#777777'; //platfrom telepheric
            ctx.fillRect(321,270,150,30); //platfrom telepheric
            ctx.fill(); //platfrom telepheric
            }
        }
    if(screen==7)
        {
        if (telepheric_move_to_right==false && telepheric_move_to_left==false)
            {
            ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
            ctx.fillStyle = '#222222'; //wire
            ctx.fillRect(0,108,360,2); //wire
            ctx.fill(); //wire
            ctx.drawImage(floor1,480,180,960,420,30,108,51,161); //tower
            ctx.drawImage(button,0,0,83,106,35,198,41,53); //button 
            ctx.fillStyle = '#777777'; //platfrom telepheric
            ctx.fillRect(0,270,150,30); //platfrom telepheric
            ctx.fill(); //platfrom telepheric
            }
        if (telepheric_move_to_right==true)
            {
            ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
            ctx.fillStyle = '#222222'; //wire
            ctx.fillRect(0,108,360,2); //wire
            ctx.fill(); //wire
            ctx.drawImage(floor1,480,180,960,420,timeanimation+30,108,51,161); //tower
            ctx.drawImage(button,0,0,83,106,timeanimation+35,198,41,53); //button 
            ctx.fillStyle = '#777777'; //platfrom telepheric
            ctx.fillRect(timeanimation+(-40),270,190,30); //platfrom telepheric
            ctx.fill(); //platfrom telepheric
            if (position_old_telepheric_x==undefined){position_old_telepheric_x=position_x;}
            position_x=position_old_telepheric_x+timeanimation;
            if (timeanimation>315)
                {
                if (timeanimationworker!==undefined){timeanimationworker.terminate();}
                timeanimationworker=undefined;
                timeanimation=0;
                init_timeanimationworker();
                screen=8;
                } 
            }
       if (telepheric_move_to_left==true)
            {
            ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
            ctx.fillStyle = '#222222'; //wire
            ctx.fillRect(0,108,360,2); //wire
            ctx.fill(); //wire
            ctx.drawImage(floor1,480,180,960,420,(-timeanimation)+(10+340),108,51,161); //tower
            ctx.drawImage(button,0,0,83,106,(-timeanimation)+(15+340),198,41,53); //button 
            ctx.fillStyle = '#777777'; //platfrom telepheric
            ctx.fillRect((-timeanimation)+(40+240),270,190,30); //platfrom telepheric
            ctx.fill(); //platfrom telepheric
            position_x=(-timeanimation+position_old_telepheric_x)+68;
            if (-timeanimation<-315)
                {
                if (timeanimationworker!==undefined){timeanimationworker.terminate();}
                timeanimationworker=undefined;
                timeanimation=0;
                telepheric_left=true;
                telepheric_move_to_left=false;
                no_move=false;
                }
            }
        }
    if(screen==8)
        {
        if (telepheric_move_to_right==true)
            {
            ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
            ctx.fillStyle = '#222222'; //wire
            ctx.fillRect(0,108,360,2); //wire
            ctx.fill(); //wire
            ctx.drawImage(floor1,480,180,960,420,timeanimation-60+30,108,51,161); //tower
            ctx.drawImage(button,0,0,83,106,timeanimation-60+35,198,41,53); //button 
            ctx.fillStyle = '#777777'; //platfrom telepheric
            ctx.fillRect(timeanimation-60+(-40),270,190,30); //platfrom telepheric
            ctx.fill(); //platfrom telepheric
            position_x=position_old_telepheric_x+timeanimation-60;
            if (timeanimation>375)
                {
                if (timeanimationworker!==undefined){timeanimationworker.terminate();}
                timeanimationworker=undefined;
                timeanimation=0;
                init_timeanimationworker();
                screen=9;
                }
            }
        if (telepheric_move_to_left==true)
            {
            ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
            ctx.fillStyle = '#222222'; //wire
            ctx.fillRect(0,108,360,2); //wire
            ctx.fill(); //wire
            ctx.drawImage(floor1,480,180,960,420,(-timeanimation)+(10+340),108,51,161); //tower
            ctx.drawImage(button,0,0,83,106,(-timeanimation)+(15+340),198,41,53); //button 
            ctx.fillStyle = '#777777'; //platfrom telepheric
            ctx.fillRect((-timeanimation)+(40+240),270,190,30); //platfrom telepheric
            ctx.fill(); //platfrom telepheric
            position_x=(-timeanimation+position_old_telepheric_x)+68;
            if (-timeanimation<-385)
                {
                if (timeanimationworker!==undefined){timeanimationworker.terminate();}
                timeanimationworker=undefined;
                timeanimation=0;
                init_timeanimationworker();
                screen=7;
                }
            }
        }
    if(screen==9)
        {
        if (telepheric_move_to_right==true)
            {
            ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
            ctx.fillStyle = '#222222'; //wire
            ctx.fillRect(0,108,360,2); //wire
            ctx.fill(); //wire
            ctx.drawImage(floor1,480,180,960,420,timeanimation-60+30,108,51,161); //tower
            ctx.drawImage(button,0,0,83,106,timeanimation-60+35,198,41,53); //button 
            ctx.fillStyle = '#777777'; //platfrom telepheric
            ctx.fillRect(timeanimation-60+(-40),270,190,30); //platfrom telepheric
            ctx.fill(); //platfrom telepheric
            position_x=position_old_telepheric_x+timeanimation-60;
            if (timeanimation>375)
                {
                if (timeanimationworker!==undefined){timeanimationworker.terminate();}
                timeanimationworker=undefined;
                timeanimation=0;
                init_timeanimationworker();
                screen=10; 
/*                telepheric_move_to_right=false; 
                telepheric_right=true; 
                telepheric_called_right=true; 
                no_move=false;*/
                }
            }
        if (telepheric_move_to_left==true)
            {
            ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
            ctx.fillStyle = '#222222'; //wire
            ctx.fillRect(0,108,360,2); //wire
            ctx.fill(); //wire
            ctx.drawImage(floor1,480,180,960,420,(-timeanimation)+(10+340),108,51,161); //tower
            ctx.drawImage(button,0,0,83,106,(-timeanimation)+(15+340),198,41,53); //button 
            ctx.fillStyle = '#777777'; //platfrom telepheric
            ctx.fillRect((-timeanimation)+(40+240),270,190,30); //platfrom telepheric
            ctx.fill(); //platfrom telepheric
            position_x=(-timeanimation+position_old_telepheric_x)+68;
            if (-timeanimation<-385)
                {
                if (timeanimationworker!==undefined){timeanimationworker.terminate();}
                timeanimationworker=undefined;
                timeanimation=0;
                init_timeanimationworker();
                screen=8;
                }
            }
        }
    if(screen==10)
        {
        if (telepheric_move_to_right==true)
            {
            ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
            ctx.fillStyle = '#222222'; //wire
            ctx.fillRect(0,108,360,2); //wire
            ctx.fill(); //wire
            ctx.drawImage(floor1,480,180,960,420,timeanimation-60+30,108,51,161); //tower
            ctx.drawImage(button,0,0,83,106,timeanimation-60+35,198,41,53); //button 
            ctx.fillStyle = '#777777'; //platfrom telepheric
            ctx.fillRect(timeanimation-60+(-40),270,190,30); //platfrom telepheric
            ctx.fill(); //platfrom telepheric
            position_x=position_old_telepheric_x+timeanimation-60;
            if (timeanimation>325)
                {
                if (timeanimationworker!==undefined){timeanimationworker.terminate();}
                timeanimationworker=undefined;
                timeanimation=0;
                init_timeanimationworker();
                telepheric_move_to_right=false; 
                telepheric_right=true; 
                telepheric_called_right=true; 
                no_move=false;
                }
            }
        if (telepheric_move_to_right==false)
            {
            ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
            ctx.fillStyle = '#222222'; //wire
            ctx.fillRect(0,108,360,2); //wire
            ctx.fill(); //wire
            ctx.drawImage(floor1,480,180,960,420,335-40,108,51,161); //tower
            ctx.drawImage(button,0,0,83,106,335-35,198,41,53); //button 
            ctx.fillStyle = '#777777'; //platfrom telepheric
            ctx.fillRect(335-110,270,150,30); //platfrom telepheric
            ctx.fill(); //platfrom telepheric
            }
        if (telepheric_move_to_left==true)
            {
            ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
            ctx.fillStyle = '#222222'; //wire
            ctx.fillRect(0,108,360,2); //wire
            ctx.fill(); //wire
            ctx.drawImage(floor1,480,180,960,420,(-timeanimation)+(10+270),108,51,161); //tower
            ctx.drawImage(button,0,0,83,106,(-timeanimation)+(15+270),198,41,53); //button 
            ctx.fillStyle = '#777777'; //platfrom telepheric
            ctx.fillRect((-timeanimation)+(40+170),270,190,30); //platfrom telepheric
            ctx.fill(); //platfrom telepheric
            if (position_old_telepheric_x==undefined){position_old_telepheric_x=position_x-15;}
            position_x=(-timeanimation+position_old_telepheric_x);
            if (-timeanimation<-315)
                {
                if (timeanimationworker!==undefined){timeanimationworker.terminate();}
                timeanimationworker=undefined;
                timeanimation=0;
                init_timeanimationworker();
                screen=9;
                }
            }
        }
    if(screen==11)
        {
        ctx.drawImage(background1,0,0,1024,1024,0,0,360,360); //background
        ctx.fillStyle = '#222222'; //room ruf
        ctx.fillRect(350,90,10,10); //room ruf
        ctx.fillStyle = '#084384'; //room blue
        ctx.fillRect(350,100,10,170); //room blue
        ctx.drawImage(floor1,480,180,960,450,40,270,320,90); //floor
        ctx.drawImage(floor1,480,180,960,420,-55+360-250,108,51,161); //tower
        ctx.drawImage(button,0,0,83,106,-45+360-255,198,41,53); //button
        ctx.fillStyle = '#222222'; //wire
        ctx.fillRect(-60+360-302,108,59,2); //wire
        ctx.fill(); //wire
        if ((telepheric_called_right==false || telepheric_called_right==true) && telepheric_right==true)
            {
            ctx.fillStyle = '#00FF00'; //led green 
            ctx.fillRect(-5+360-314,260,6,10); //led green 
            ctx.fill(); //led green 
            }
        if (telepheric_right==true)
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;        
            init_timeanimationworker();
            timeanimation=-479;
            ctx.fillStyle = '#777777'; //platfrom telepheric
            ctx.fillRect(0,270,39,30); //platfrom telepheric
            ctx.fill(); //platfrom telepheric
            }
        }
    if(screen==12)
        {
        ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
        ctx.fillStyle = '#222222'; //room ruf
        ctx.fillRect(0,90,360,10); //room ruf
        ctx.drawImage(room_blue,0,0,914,508,0,100,360,170); //room blue
        ctx.fillStyle = '#222222'; //floor
        ctx.fillRect(0,270,360,90); //floor
        ctx.drawImage(metal,0,0,256,256,165,206,64,64); 
        ctx.drawImage(metal,0,0,256,256,235,206,64,64);
        ctx.drawImage(metal,0,0,256,256,185,142,64,64);
        ctx.drawImage(metal,0,0,256,256,55,206,64,64);
        ctx.fillStyle = 'black';
        ctx.font = "12px courier";
        ctx.fillText("Urgent", 193, 169);
        ctx.fillText("Fragile", 174, 235);
        ctx.fillText("Urgent", 63, 235);
        ctx.fillStyle = 'black';
        ctx.font = "14px arial";
        //enemy2
        if(position_x<297 && enemy2_destroyed==false)
            {
            ctx.drawImage(enemy_left_grey,32*2,72*2,32,72,307,222,32,72); //enemy
            ctx.fillStyle = '#444444'; //rifle
            ctx.fillRect(307,237,25,2); //rifle
            ctx.fill(); //rifle
            }
        if(position_x>298 && enemy2_destroyed==false)
            {
            enemy2_destroyed=true;
            honor=honor+1000;
            }
        if(enemy2_destroyed==true)
            {
            ctx.drawImage(enemy_left_grey,(0+32*4-5),320,58,72,307,206,58,72); //enemy destroyed
            }
        init_timeanimationworker();
        if(timeanimation<160 && enemy2_destroyed==false)
            {
            ctx.drawImage(fireball_reverse,0,0,256,56,297-(timeanimation*2),235,21,5); //fire shot
            if (position_x<297-(timeanimation*2) && position_x+32>297-(timeanimation*2) && position_y>175 && kick==false){power=power-10;}
            }
        else
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;        
            init_timeanimationworker();
            timeanimation=0;
            }
        }
    if(screen==13)
        {
        ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
        ctx.fillStyle = '#222222'; //room ruf
        ctx.fillRect(0,90,360,10); //room ruf
        ctx.drawImage(room_blue,0,0,914,508,0,100,360,170); //room blue
        ctx.fillStyle = '#222222'; //floor
        ctx.fillRect(0,270,360,90); //floor
        ctx.fillStyle =  'red'; //platfrom electric induction 
        ctx.fillRect(120,130,120,12); //platfrom electric induction 
        ctx.fillRect(140,270,80,12); //platfrom electric induction 
        ctx.fillStyle =  'black';
        ctx.font = "12px arial";
        ctx.fillText("Electric Charger", 136, 140);
        ctx.fillText("CAUTION", 153, 280);
        if(position_x>130 && position_x<195 && power<100 && time.toFixed(2)%1==0)
            {
            ctx.drawImage(ray,0,0,157,618,position_x,130,40,140); // electric ray
            power=power+0.1;
            }
        else
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;        
            init_timeanimationworker();
            timeanimation=0;
            }
        }
    if(screen==14)
        {       
        ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
        ctx.fillStyle = '#222222'; //room ruf
        ctx.fillRect(0,90,10,10); //room ruf
        ctx.fillStyle = '#084384'; //room blue
        ctx.fillRect(0,100,10,170); //room blue
        ctx.drawImage(floor1,480,180,960,450,0,270,360,90);
        ctx.fillStyle = '#151515'; //elevator hole
        ctx.fillRect(180,270,120,90); //elevator hole
        ctx.fillStyle = '#607483'; //wall 
        ctx.fillRect(340,0,20,270); //wall 
        ctx.drawImage(floor1,480,200,960,420,120,192,48,78); //control call elevator
        ctx.drawImage(button,0,0,83,106,122,194,44,56); //button 
        if(elevator_up==false && elevator_going_down==true && position_y>360)
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined; 
            timeanimation=0;
            init_timeanimationworker();
            screen=15;
            position_y=0-84;
            honor=honor+10;
            }
        else if(elevator_up==false && elevator_going_down==true)
            {
            position_y=206+timeanimation;
            ctx.drawImage(elevator,0,0,914,508,180,162+timeanimation,120,108); // elevator
            ctx.drawImage(button,0,0,83,106,220-3,192+timeanimation,44,56); //button 
            ctx.fillStyle = '#333333'; ////elevator platforms
            ctx.fillRect(180,142+timeanimation,120,20); //elevator platform upper
            ctx.fillRect(180,270+timeanimation,120,20); //elevator platform floor
            ctx.fillStyle = '#222222'; //elevator axis
            ctx.fillRect(230,290+timeanimation,20,90); //elevator axis
            ctx.fill();
            }
        else if(elevator_up==true)
            {
            ctx.drawImage(elevator,0,0,914,508,180,162,120,108); // elevator
            ctx.drawImage(button,0,0,83,106,220-3,192,44,56); //button 
            ctx.fillStyle = '#333333'; //elevator platforms
            ctx.fillRect(180,142,120,20); //elevator platform upper
            ctx.fillRect(180,270,120,20); //elevator platform floor
            ctx.fillStyle = '#222222'; //elevator axis
            ctx.fillRect(230,290,20,90); //elevator axis
            ctx.fill();
            }
        else if(elevator_up==false && elevator_going_up==true && position_y>206) 
            {
            position_y=360-timeanimation;
            ctx.drawImage(elevator,0,0,914,508,180,-108-timeanimation+270+154,120,108); // elevator
            ctx.drawImage(button,0,0,83,106,220-3,-20-56-timeanimation+270+154,44,56); //button 
            ctx.fillStyle = '#333333'; ////elevator platforms
            ctx.fillRect(180,-128-timeanimation+270+154,120,20); //elevator platform upper
            ctx.fillRect(180,+270-timeanimation+154,120,20); //elevator platform floor
            ctx.fillStyle = '#222222'; //elevator axis
            ctx.fillRect(230,290-timeanimation+154,20,timeanimation+90+154); //elevator axis
            ctx.fill();
            }
        else if(elevator_up==false && elevator_going_up==true && position_y==206)
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined; 
            timeanimation=0;
            init_timeanimationworker();
            elevator_going_up=false;
            elevator_going_down=false;
            elevator_down=false; 
            elevator_up=true; 
            no_move=false;
            ctx.drawImage(elevator,0,0,914,508,180,162,120,108); // elevator
            ctx.drawImage(button,0,0,83,106,220-3,192,44,56); //button 
            ctx.fillStyle = '#333333'; //elevator platforms
            ctx.fillRect(180,142,120,20); //elevator platform upper
            ctx.fillRect(180,270,120,20); //elevator platform floor
            ctx.fillStyle = '#222222'; //elevator axis
            ctx.fillRect(230,290,20,90); //elevator axis
            ctx.fill();
            }
        else if (position_y<206) // eye! //////////////////////////////////////////////////////////////////
            {
            position_y=206;
            }
        }
    if(screen==15)  
        {
        ctx.fillStyle = '#111111'; //background
        ctx.fillRect(0,0,360,360); //background
        ctx.fillStyle = '#151515'; //elevator hole
        ctx.fillRect(180,0,120,360); //elevator hole
        if(elevator_up==false && elevator_going_down==true && position_y>360)
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined; 
            timeanimation=0;
            init_timeanimationworker();
            screen=16;
            position_y=0-84;
            honor=honor+10;
            }
        else if(elevator_up==false && elevator_going_down==true)
            {
            position_y=-84+timeanimation;
            ctx.drawImage(elevator,0,0,914,508,180,-20-108+timeanimation,120,108); // elevator
            ctx.drawImage(button,0,0,83,106,220-3,-30-10-56+timeanimation,44,56); //button 
            ctx.fillStyle = '#333333'; ////elevator platforms
            ctx.fillRect(180,-128-20+timeanimation,120,20); //elevator platform upper
            ctx.fillRect(180,-20+timeanimation,120,20); //elevator platform floor
            ctx.fillStyle = '#222222'; //elevator axis
            ctx.fillRect(230,0+timeanimation,20,360); //elevator axis
            ctx.fill();
            }
        else if(elevator_going_up==true && position_y>-84) 
            {
            position_y=206-timeanimation;
            ctx.drawImage(elevator,0,0,914,508,180,-108-timeanimation+270,120,108); // elevator
            ctx.drawImage(button,0,0,83,106,220-3,-20-56-timeanimation+270,44,56); //button 
            ctx.fillStyle = '#333333'; ////elevator platforms
            ctx.fillRect(180,-128-timeanimation+270,120,20); //elevator platform upper
            ctx.fillRect(180,+270-timeanimation,120,20); //elevator platform floor
            ctx.fillStyle = '#222222'; //elevator axis
            ctx.fillRect(230,290-timeanimation,20,timeanimation+90); //elevator axis
            ctx.fill();
            }
        else if(elevator_going_up==true)
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined; 
            timeanimation=0;
            init_timeanimationworker();
            screen=14;
            position_y=360;
            /*honor=honor-10;*/
            }
        }
    if(screen==16)
        {
        ctx.fillStyle = '#111111'; //background
        ctx.fillRect(0,0,360,360); //background
        ctx.fillStyle = '#151515'; //elevator hole
        ctx.fillRect(180,0,120,360); //elevator hole
        if(elevator_up==false && elevator_going_down==true && position_y>360)
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined; 
            timeanimation=0;
            init_timeanimationworker();
            screen=17;
            honor=honor+10;
            position_y=0-84;
            }
        else if(elevator_up==false && elevator_going_down==true)
            {
            position_y=-84+timeanimation;
            ctx.drawImage(elevator,0,0,914,508,180,-20-108+timeanimation,120,108); // elevator
            ctx.drawImage(button,0,0,83,106,220-3,-30-10-56+timeanimation,44,56); //button 
            ctx.fillStyle = '#333333'; ////elevator platforms
            ctx.fillRect(180,-128-20+timeanimation,120,20); //elevator platform upper
            ctx.fillRect(180,-20+timeanimation,120,20); //elevator platform floor
            ctx.fillStyle = '#222222'; //elevator axis
            ctx.fillRect(230,0+timeanimation,20,360); //elevator axis
            ctx.fill();
            }
        else if(elevator_going_up==true && position_y>-84) 
            {
            position_y=206-timeanimation;
            ctx.drawImage(elevator,0,0,914,508,180,-108-timeanimation+270,120,108); // elevator
            ctx.drawImage(button,0,0,83,106,223,-20-56-timeanimation+270,44,56); //button 
            ctx.fillStyle = '#333333'; ////elevator platforms
            ctx.fillRect(180,-128-timeanimation+270,120,20); //elevator platform upper
            ctx.fillRect(180,+270-timeanimation,120,20); //elevator platform floor
            ctx.fillStyle = '#222222'; //elevator axis
            ctx.fillRect(230,290-timeanimation,20,timeanimation+90); //elevator axis
            ctx.fill();
            }
        else if(elevator_going_up==true)
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined; 
            timeanimation=0;
            init_timeanimationworker();
            screen=15;
            /*honor=honor-10;*/
            position_y=360;
            }
        }
    if(screen==17)
        {
        ctx.fillStyle = '#111111'; //background
        ctx.fillRect(0,0,360,360); //background
        ctx.drawImage(room_red,0,0,914,508,0,100,360,170);
        ctx.fillStyle = '#151515'; //elevator hole
        ctx.fillRect(180,0,120,290); //elevator hole
        ctx.drawImage(button_elevator,0,0,83,106,122,194,44,56); //button
        ctx.drawImage(button_elevator,0,0,83,106,122+190,194,44,56); //button
        if(elevator_up==false && elevator_going_down==true && position_y<=205) // eye! position_y<=205 //////////////////
            {
            position_y=-84+timeanimation;
            ctx.drawImage(elevator,0,0,914,508,180,-20-108+timeanimation,120,108); // elevator
            ctx.drawImage(button,0,0,83,106,220-3,-30-10-56+timeanimation,44,56); //button 
            ctx.fillStyle = '#333333'; ////elevator platforms
            ctx.fillRect(180,-128-20+timeanimation,120,20); //elevator platform upper
            ctx.fillRect(180,-20+timeanimation,120,20); //elevator platform floor
            ctx.fillStyle = '#222222'; //elevator axis
            ctx.fillRect(230,0+timeanimation,20,290-timeanimation); //elevator axis
            ctx.fill();
            }
        else if (elevator_going_down==true)
            {
            no_move=false;
            elevator_going_down=false;
            elevator_down=true;
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined; 
            timeanimation=0;
            init_timeanimationworker();
            ctx.drawImage(elevator,0,0,914,508,180,-20-108+206+84,120,108); // elevator
            ctx.drawImage(button,0,0,83,106,220-3,-30-10-56+206+84,44,56); //button 
            ctx.fillStyle = '#333333'; ////elevator platforms
            ctx.fillRect(180,-128-20+206+84,120,20); //elevator platform upper
            ctx.fillRect(180,-20+206+84,120,20); //elevator platform floor
            ctx.fill();
            }
        else if(elevator_going_up==true && position_y>-84) 
            {
            position_y=206-timeanimation;
            ctx.drawImage(elevator,0,0,914,508,180,-108-timeanimation+270,120,108); // elevator
            ctx.drawImage(button,0,0,83,106,220-3,-20-56-timeanimation+270,44,56); //button 
            ctx.fillStyle = '#333333'; ////elevator platforms
            ctx.fillRect(180,-128-timeanimation+270,120,20); //elevator platform upper
            ctx.fillRect(180,+270-timeanimation,120,20); //elevator platform floor
            ctx.fillStyle = '#222222'; //elevator axis
            ctx.fillRect(230,290-timeanimation,20,timeanimation); //elevator axis
            ctx.fill();
            }
        else if(elevator_going_up==true) 
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined; 
            timeanimation=0;
            init_timeanimationworker();
            screen=16;
            /*honor=honor-10;*/
            position_y=360;
            }
        else 
            {
            if(position_y>206){position_y=206;}// eje! ///////////////////////////////////////////////////////////////
            ctx.drawImage(elevator,0,0,914,508,180,-20-108+206+84,120,108); // elevator
            ctx.drawImage(button,0,0,83,106,220-3,-30-10-56+206+84,44,56); //button 
            ctx.fillStyle = '#333333'; ////elevator platforms
            ctx.fillRect(180,-128-20+206+84,120,20); //elevator platform upper
            ctx.fillRect(180,-20+206+84,120,20); //elevator platform floor
            ctx.fill();
            }
        }
    if(screen==18)
        {
        ctx.fillStyle = '#111111'; //background
        ctx.fillRect(0,0,360,360); //background
        ctx.drawImage(room_red,0,0,914,508,0,100,360,170);
        //enemy3
        if(position_x<297 && enemy3_destroyed==false)
            {
            ctx.drawImage(enemy_left_red,32*2,72*2,32,72,307,222,32,72); //enemy
            ctx.fillStyle = '#444444'; //rifle
            ctx.fillRect(307,237,25,2); //rifle
            ctx.fill(); //rifle
            }
        if(position_x>298 && enemy3_destroyed==false)
            {
            enemy3_destroyed=true;
            honor=honor+1000;
            }
        if(enemy3_destroyed==true)
            {
            ctx.drawImage(enemy_left_red,(0+32*4-5),320,58,72,307,206,58,72); //enemy destroyed
            }
        init_timeanimationworker();
        if(timeanimation<160 && enemy3_destroyed==false)
            {
            ctx.drawImage(fireball_reverse,0,0,256,56,297-(timeanimation*2),235,21,5); //fire shot
            if (position_x<297-(timeanimation*2) && position_x+32>297-(timeanimation*2) && position_y>175 && kick==false){power=power-10;}
            }
        else
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;        
            init_timeanimationworker();
            timeanimation=0;
            }
        }
    if(screen==19)
        {
        ctx.fillStyle = '#111111'; //background
        ctx.fillRect(0,0,360,360); //background
        ctx.drawImage(room_red,0,0,914,508,0,100,360,170);
        //enemy4
        if(position_x<297 && enemy4_destroyed==false)
            {
            ctx.drawImage(enemy_left_red,32*2,72*2,32,72,307,222,32,72); //enemy
            ctx.fillStyle = '#444444'; //rifle
            ctx.fillRect(307,237,25,2); //rifle
            ctx.fill(); //rifle
            }
        if(position_x>298 && enemy4_destroyed==false)
            {
            enemy4_destroyed=true;
            honor=honor+1000;
            }
        if(enemy4_destroyed==true)
            {
            ctx.drawImage(enemy_left_red,(0+32*4-5),320,58,72,307,206,58,72); //enemy destroyed
            }
        init_timeanimationworker();
        if(timeanimation<160 && enemy4_destroyed==false)
            {
            ctx.drawImage(fireball_reverse,0,0,256,56,297-(timeanimation*2),235,21,5); //fire shot
            if (position_x<297-(timeanimation*2) && position_x+32>297-(timeanimation*2) && position_y>175 && kick==false){power=power-10;}
            }
        else
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;        
            init_timeanimationworker();
            timeanimation=0;
            }
        }
    if(screen==20) 
        {
        ctx.fillStyle = '#111111'; //background
        ctx.fillRect(0,0,360,360); //background
        ctx.drawImage(room_red,0,0,914,508,0,100,360,170);
        ctx.fillStyle = '#111111'; //wall
        ctx.fillRect(340,0,20,360); //wall
        ctx.drawImage(floor1,480,200,960,420,300+5,192+30,40-10,39+9); //support computer
        ctx.drawImage(computer,0,0,83,106,310,225,20,25); //computer (thinkpad)
        if (in_computer==true)
            {
            ctx.fillStyle = '#000000'; //virtual computer screen
            ctx.fillRect(20,120,280,135); //virtual computer screen
            ctx.fillStyle = 'lightgreen';
            ctx.font = "14px arial";
            ctx.fillText("Nuclear fusion container menu", 25, 140);
            ctx.fillText("----------------------------------------", 25, 155);
            ctx.fillText("z -> stop nuclear fusion container (now)", 25, 175);
            ctx.fillText("x -> stop nuclear fusion container (2 min)", 25, 195);
            ctx.fillText("enter -> execute command and exit ", 25, 215);
            if (stop_nuclear_fusion_container_now==false && stop_nuclear_fusion_container_3_min==false)
            ctx.fillText("option selected: none", 25, 235);
            if (stop_nuclear_fusion_container_now==true && stop_nuclear_fusion_container_3_min==false)
            ctx.fillText("option selected: z", 25, 235);
            if (stop_nuclear_fusion_container_now==false && stop_nuclear_fusion_container_3_min==true)
            ctx.fillText("option selected: x", 25, 235);
            }
        if (command_executed==true && stop_nuclear_fusion_container_now==true)
            {
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;        
            timeanimation=0;
            init_timeanimationworker();
            screen=22;
            }
        }
    if(screen==21) //very bad final
        {        
        ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
        ctx.fillStyle = '#333399'; // orbital station
        ctx.fillRect(120,215,10,10); // orbital station
        ctx.fillStyle = 'black'; // orbital station
        ctx.fillRect(120,215,1,1); // orbital station
        ctx.fillRect(129,215,1,1); // orbital station
        ctx.fillRect(120,224,1,1); // orbital station
        ctx.fillRect(129,224,1,1); // orbital station
        ctx.fillStyle = '#111155'; // orbital station
        ctx.fillRect(122,217,6,6); // orbital station
        ctx.fillStyle = '#aaaaff'; // orbital station
        ctx.fillRect(124,219,2,2); // orbital station
        if (timeanimation>0 && timeanimation<298)
            {
            ctx.fillStyle = '#7777ff';  //far ship
            ctx.fillRect(120+timeanimation,220,2,2); //far ship
            }
        gameover=true;
        time=120;
        ctx.fillStyle = 'white';
        ctx.font = "35px arial";
        ctx.fillText("You are not a ninja!" , 10, 40);
        ctx.font = "62px arial";
        ctx.fillText("Game Over!" , 10, 180);
        ctx.font = "40px arial";
        ctx.fillText("    Press escape" , 10, 310);
        if(final_done==false && timeanimation>297)
            {
            if (timeworker!==undefined){timeworker.terminate();}
            timeworker=undefined;        
            time=120;
            //init_timeworker();
            final_done=true;
            }
        }
    if(screen==22) //bad final
        {
        var x;var y;        
        ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
        if (timeanimation>-1 && timeanimation<8){x=timeanimation;y=0;}
        if (timeanimation>7 && timeanimation<16){x=timeanimation-8;y=1;}
        if (timeanimation>15 && timeanimation<24){x=timeanimation-16;y=2;}
        if (timeanimation>23 && timeanimation<32){x=timeanimation-24;y=3;}
        if (timeanimation>31 && timeanimation<40){x=timeanimation-32;y=4;}
        if (timeanimation>39 && timeanimation<48){x=timeanimation-40;y=5;}
        if (timeanimation>47 && timeanimation<56){x=timeanimation-48;y=6;}
        if (timeanimation>55 && timeanimation<64){x=timeanimation-56;y=7;}
        ctx.drawImage(boom,0+x*256,0+y*256,256,256,70,160,128,128);
        gameover=true;
        time=120;
        ctx.fillStyle = 'white';
        ctx.font = "23px arial";
        ctx.fillText("You are an honorable dead ninja!" , 10, 40);
        ctx.font = "62px arial";
        ctx.fillText("Game Over!" , 10, 180);
        ctx.font = "40px arial";
        ctx.fillText("    Press escape" , 10, 310);
        if(final_done==false && timeanimation>297)
            {
            if (timeworker!==undefined){timeworker.terminate();}
            timeworker=undefined;        
            time=120;
            //init_timeworker();
            final_done=true;
            }
        }
    if(screen==23) //good final
        {
        var x;var y;        
        ctx.drawImage(background1,0,0,1024,1024,0,0,360,360);
        if (timeanimation>-1 && timeanimation<8){x=timeanimation;y=0;}
        if (timeanimation>7 && timeanimation<16){x=timeanimation-8;y=1;}
        if (timeanimation>15 && timeanimation<24){x=timeanimation-16;y=2;}
        if (timeanimation>23 && timeanimation<32){x=timeanimation-24;y=3;}
        if (timeanimation>31 && timeanimation<40){x=timeanimation-32;y=4;}
        if (timeanimation>39 && timeanimation<48){x=timeanimation-40;y=5;}
        if (timeanimation>47 && timeanimation<56){x=timeanimation-48;y=6;}
        if (timeanimation>55 && timeanimation<64){x=timeanimation-56;y=7;}
        ctx.drawImage(boom,0+x*256,0+y*256,256,256,70,160,128,128);
        if (timeanimation>0 && timeanimation<298)
            {
            ctx.fillStyle = '#DDDDFF';  //far ship
            ctx.fillRect(120+timeanimation,220,2,2); //far ship
            }
        gameover=true;
        time=120;
        ctx.fillStyle = 'white';
        ctx.font = "27px arial";
        ctx.fillText("You are an honorable ninja!" , 10, 40);
        ctx.font = "74px arial";
        ctx.fillText("Good Job!" , 10, 180);
        ctx.font = "40px arial";
        ctx.fillText("    Press escape" , 10, 310);
        if(final_done==false && timeanimation>297)
            {
            if (timeworker!==undefined){timeworker.terminate();}
            timeworker=undefined;        
            time=120;
            //init_timeworker();
            final_done=true;
            }
        }
    //game over        
    if (command_executed==true && stop_nuclear_fusion_container_3_min==true && time<0.2) //
        {
        gameover=true;
        screen=22;
        }
    else if (screen!=0 && screen!=-1 && (screen!=14 && screen!=15 && screen!=16) && (power<1 || time<0.2 || position_y>360) && going_out==false) //generic gameover
        {
        gameover=true;
        ctx.fillStyle = 'white';
        ctx.font = "62px arial";
        ctx.fillText("Game Over!" , 10, 180);
        ctx.font = "40px arial";
        ctx.fillText("    Press escape" , 10, 310);
        ctx.drawImage(player_right,(0+32*4-5),320,58,72,position_x-25,position_y,58,72);
        }

    else if ((screen==14 || screen==15 || screen==16) && (power<1 || time<0.2) && going_out==false) //screen 14 15 16 gameover
        {
        gameover=true;
        ctx.fillStyle = 'white';
        ctx.font = "62px arial";
        ctx.fillText("Game Over!" , 10, 180);
        ctx.font = "40px arial";
        ctx.fillText("    Press escape" , 10, 310);
        ctx.drawImage(player_right,(0+32*4-5),320,58,72,position_x-25,position_y,58,72);
        }
    //game text
    if (screen!=-1 && gameover==false)
        {
        ctx.fillStyle = 'white';
        ctx.font = "20px arial";
        ctx.fillText("Power: " + Math.floor(power) + "%" , 10, 35);
        if (command_executed==true && stop_nuclear_fusion_container_3_min==true)
            {
            ctx.fillStyle = 'red';
            }
        else 
            {
            ctx.fillStyle = 'white';
            }        
        ctx.font = "20px arial";
        ctx.fillText("Time: " + Math.floor(time.toFixed(2)) , 260, 35);
        ctx.fillStyle = 'white';
        ctx.font = "20px arial";
        ctx.fillText("Honor: " + honor , 10, 60);
        //ctx.fillText("X: " + position_x + " Y: " + position_y + " screen: " + screen, 10, 85);
        //ctx.fillText("going_out: " + going_out , 10, 110);
        //ctx.fillText("stop_container_3_min: " + stop_nuclear_fusion_container_3_min, 10, 135);
        }
    //player
    if (screen!=0 && screen!=-1 && !(power<1 || time<0.2 || position_y>360) && gameover==false)
        {
        //stand
	    if(velocity_right==0 && last_move=='right' && kick==false && punch==false && jump==false && bend==false && position_y==206 && screen!=14 && screen!=15 && screen!=16){ctx.drawImage(player_right,0,0,32,72,position_x,206,32,72);} //stand right generic
	    if(velocity_left==0 && last_move=='left' && kick==false && punch==false && jump==false && bend==false && position_y==206 && screen!=14 && screen!=15 && screen!=16){ctx.drawImage(player_left,288,0,32,72,position_x,206,32,72);} //stand left generic

        if(velocity_right==0 && last_move=='right' && kick==false && punch==false && jump==false && bend==false && position_y==206 && screen==14){ctx.drawImage(player_right,0,0,32,72,position_x,206,32,72);} //stand right screen 14
	    if(velocity_left==0 && last_move=='left' && kick==false && punch==false && jump==false && bend==false && position_y==206 && screen==14){ctx.drawImage(player_left,288,0,32,72,position_x,206,32,72);} //stand left screen 14

	    if(velocity_right==0 && last_move=='right' && kick==false && punch==false && jump==false && bend==false && position_y>206 && screen==14){ctx.drawImage(player_right,0,0,32,72,position_x,position_y,32,72);} //stand right screen 14
	    if(velocity_left==0 && last_move=='left' && kick==false && punch==false && jump==false && bend==false && position_y>206 && screen==14){ctx.drawImage(player_left,288,0,32,72,position_x,position_y,32,72);} //stand left screen 14

        if(velocity_right==0 && last_move=='right' && kick==false && punch==false && jump==false && bend==false && position_y==206 && screen==17){ctx.drawImage(player_right,0,0,32,72,position_x,206,32,72);} //stand right screen 17
	    if(velocity_left==0 && last_move=='left' && kick==false && punch==false && jump==false && bend==false && position_y==206 && screen==17){ctx.drawImage(player_left,288,0,32,72,position_x,206,32,72);} //stand left screen 17

	    if(velocity_right==0 && last_move=='right' && kick==false && punch==false && jump==false && bend==false && position_y<206 && screen==17 && elevator_down==false){ctx.drawImage(player_right,0,0,32,72,position_x,position_y,32,72);} //stand right screen 17
	    if(velocity_left==0 && last_move=='left' && kick==false && punch==false && jump==false && bend==false && position_y<206 && screen==17 && elevator_down==false){ctx.drawImage(player_left,288,0,32,72,position_x,position_y,32,72);} //stand left screen 17

        if(velocity_right==0 && last_move=='right' && kick==false && punch==false && jump==false && bend==false && position_y>-100 && (screen==15 || screen==16)){ctx.drawImage(player_right,0,0,32,72,position_x,position_y,32,72);} //stand right screen 15 or 16
	    if(velocity_left==0 && last_move=='left' && kick==false && punch==false && jump==false && bend==false && position_y>-100 && (screen==15 || screen==16)){ctx.drawImage(player_left,288,0,32,72,position_x,position_y,32,72);} //stand left screen 15 or 16
        //stand end
        
	    if(velocity_right==1 && run_animation_right==0 && kick==false && punch==false && jump==false && bend==false && position_y==206){ctx.drawImage(player_right,(0+32*1),0,32,72,position_x,206,32,72);} //run right
	    if(velocity_right==1 && run_animation_right==1 && kick==false && punch==false && jump==false && bend==false && position_y==206){ctx.drawImage(player_right,(0+32*2),0,32,72,position_x,206,32,72);}
	    if(velocity_right==1 && run_animation_right==2 && kick==false && punch==false && jump==false && bend==false && position_y==206){ctx.drawImage(player_right,(0+32*3),0,32,72,position_x,206,32,72);}
	    if(velocity_right==1 && run_animation_right==3 && kick==false && punch==false && jump==false && bend==false && position_y==206){ctx.drawImage(player_right,(0+32*4),0,32,72,position_x,206,32,72);}
	    if(velocity_right==1 && run_animation_right==4 && kick==false && punch==false && jump==false && bend==false && position_y==206){ctx.drawImage(player_right,(0+32*5),0,32,72,position_x,206,32,72);}
	    if(velocity_right==1 && run_animation_right==5 && kick==false && punch==false && jump==false && bend==false && position_y==206){ctx.drawImage(player_right,(0+32*6),0,32,72,position_x,206,32,72);}

	    if(velocity_left==1 && run_animation_left==0 && kick==false && punch==false && jump==false && bend==false && position_y==206){ctx.drawImage(player_left,(288-32*1),0,32,72,position_x,206,32,72);} //run left
	    if(velocity_left==1 && run_animation_left==1 && kick==false && punch==false && jump==false && bend==false && position_y==206){ctx.drawImage(player_left,(288-32*2),0,32,72,position_x,206,32,72);}
	    if(velocity_left==1 && run_animation_left==2 && kick==false && punch==false && jump==false && bend==false && position_y==206){ctx.drawImage(player_left,(288-32*3),0,32,72,position_x,206,32,72);}
	    if(velocity_left==1 && run_animation_left==3 && kick==false && punch==false && jump==false && bend==false && position_y==206){ctx.drawImage(player_left,(288-32*4),0,32,72,position_x,206,32,72);}
	    if(velocity_left==1 && run_animation_left==4 && kick==false && punch==false && jump==false && bend==false && position_y==206){ctx.drawImage(player_left,(288-32*5),0,32,72,position_x,206,32,72);}
	    if(velocity_left==1 && run_animation_left==5 && kick==false && punch==false && jump==false && bend==false && position_y==206){ctx.drawImage(player_left,(288-32*6),0,32,72,position_x,206,32,72);}
	    
	    if(last_move=="right" && kick==false && punch==false && jump==false && bend==true && position_y==206){ctx.drawImage(player_right,(320-32),0,32,72,position_x,position_y,32,72);} //bend
	    if(last_move=="left" && kick==false && punch==false && jump==false && bend==true && position_y==206){ctx.drawImage(player_left,(0),0,32,72,position_x,position_y,32,72);}

	    if(last_move=="right" && kick==false && punch==false && jump==true && bend==false && position_y<=206){ctx.drawImage(player_right,(320-32*3),73,32,72,position_x,position_y,32,72);} //jump
	    if(last_move=="left" && kick==false && punch==false && jump==true && bend==false && position_y<=206){ctx.drawImage(player_left,(0+32*2),73,32,72,position_x,position_y,32,72);}

        // gravity 
        // generic
	    if(last_move=="right" && jump==false && bend==false && position_y<360 && position_y!=206 && screen!=14 && screen!=15 && screen!=16 && screen!=17){ctx.drawImage(player_right,(320-32*2),73,32,72,position_x,position_y,32,72);} //gravity
	    if(last_move=="left" && jump==false && bend==false && position_y<360 && position_y!=206 && screen!=14 && screen!=15 && screen!=16 && screen!=17){ctx.drawImage(player_left,(0+32*1),73,32,72,position_x,position_y,32,72);}
        //screen 14
        if(last_move=="right" && jump==false && bend==false && position_y<360 && position_y<206 && screen==14){ctx.drawImage(player_right,(320-32*2),73,32,72,position_x,position_y,32,72);} //gravity
	    if(last_move=="left" && jump==false && bend==false && position_y<360 && position_y<206 && screen==14){ctx.drawImage(player_left,(0+32*1),73,32,72,position_x,position_y,32,72);}
        //screen 17
        if(last_move=="right" && jump==false && bend==false && position_y<360 && position_y<206 && screen==17 && elevator_down==true){ctx.drawImage(player_right,(320-32*2),73,32,72,position_x,position_y,32,72);} //gravity
	    if(last_move=="left" && jump==false && bend==false && position_y<360 && position_y<206 && screen==17 && elevator_down==true){ctx.drawImage(player_left,(0+32*1),73,32,72,position_x,position_y,32,72);}
        // gravity end

        if(last_move=="right" && kick==false && punch==true && jump==true && bend==false && position_y<=206){ctx.drawImage(player_right,(0+32*1),268,32,72,position_x,position_y,32,72);} //fly uppercut
	    if(last_move=="left" && kick==false && punch==true && jump==true && bend==false && position_y<=206){ctx.drawImage(player_left,(320-32*2-5),268,32,72,position_x,position_y,32,72);}

        if(last_move=="right" && kick==false && punch==true && jump==false && bend==false && position_y==206){ctx.drawImage(player_right,(320-32*2),258,32,72,position_x,position_y,32,72);} //run punch
	    if(last_move=="left" && kick==false && punch==true && jump==false && bend==false && position_y==206){ctx.drawImage(player_left,(0+32*1),258,32,72,position_x,position_y,32,72);}

        if(last_move=="right" && kick==true && punch==false && jump==false && bend==false && position_y==206){ctx.drawImage(player_right,(0+32*2),320,38,72,position_x,position_y,38,72);} //run kick
	    if(last_move=="left" && kick==true && punch==false && jump==false && bend==false && position_y==206){ctx.drawImage(player_left,(320-32*3-8),320,38,72,position_x-8,position_y,38,72);}
        }
    if(screen==3 && cam_destroyed==false)
        {
        //screen 3 contain more code at begin of this function
        ctx.drawImage(fireball_reverse,0,0,256,56,285-(timescreen3-time)*500,140,512,112);
        if (position_x+32>361-(timescreen3-time)*500){power=power-1000000;}
        }
    }
function restart()
    {
    //stop workers
    if (gravityworker!==undefined)
    gravityworker.terminate();
    if (jumpworker!==undefined)
    jumpworker.terminate();
    if (timeworker!==undefined)
    timeworker.terminate();
    if (timeanimationworker!==undefined)
    timeanimationworker.terminate();
    gravityworker=undefined;
    jumpworker=undefined;
    timeworker=undefined;
    timeanimationworker=undefined;
    //reset variables
    timeanimation=0;
    time=120;
    screen=0; ///////////////////////////SCREEN////////////////////////////
    power=100;
    position_x=164;
    position_y=206;
    velocity_right=0;
    velocity_left=0;
    last_move='right';
    run_animation_right=0;
    run_animation_left=0;
    jump=false;
    bend=false;
    punch=false;
    kick=false;
    gameover=false;
    cam_destroyed=false;
    honor=0;
    enemy0_destroyed=false;
    enemy1_destroyed=false;
    enemy2_destroyed=false;
    enemy3_destroyed=false;
    enemy4_destroyed=false;
    telepheric_left=false;
    telepheric_called_left=false;
    telepheric_move_to_right=false;
    telepheric_right=true;       
    telepheric_called_right=false;
    telepheric_move_to_left=false;
    elevator_up=true;
    elevator_down=false;
    elevator_going_up=false;
    elevator_going_down=false;
    no_move=false;
    in_computer=false;
    stop_nuclear_fusion_container_now=false;
    stop_nuclear_fusion_container_3_min=false;
    terminal_available=true;
    command_executed=false;
    going_out=false;
    final_done=false;
    //start workers
    init_gravityworker();
    init_jumpworker();
    init_timeworker();
    init_timeanimationworker();
    }
// CANVAS
var canvas = document.getElementById('canvas');
// KEYBOARD
document.onkeydown = checkKeyDown;
function checkKeyDown(e) 
    {
    if (e.keyCode == '37') //left cursor
        {
        if(gameover==false && no_move==false)
            {
            punch=false; jump=false; bend=false; kick=false;
            velocity_right=0;
            velocity_left=1;
            last_move='left';
            if (run_animation_left==5){run_animation_left=0;}else{run_animation_left++;}
            if (position_x>-30){position_x=position_x-3;}
            gravityworker.postMessage({position_y: position_y, position_x: position_x, screen: screen, telepheric_left: telepheric_left, telepheric_right: telepheric_right});
            }
         }
    if (e.keyCode == '39') //right cursor
        {
        if ((gameover==false && no_move==false && (screen!=14 && screen!=20) /*generic*/) || ((screen==14 || screen==20) && position_x<315 /*wall screen 14 and wall screen 20*/))
            {
            punch=false; jump=false; bend=false; kick=false;
            velocity_left=0;
            velocity_right=1;
            last_move='right';
            if (run_animation_right==5){run_animation_right=0;}else{run_animation_right++;}
            if (position_x<350){position_x=position_x+3;}
            gravityworker.postMessage({position_y: position_y, position_x: position_x, screen: screen, telepheric_left: telepheric_left, telepheric_right: telepheric_right});
            } 
        }
    if (e.keyCode == '38') //up cursor
        {
        if (gameover==false && no_move==false && position_y==206 && position_x<350 && position_x>-40 && jump==false && punch==false && kick==false)
            {
            power=power-2;
            jump=true; bend=false; punch=false; kick=false;
            jumpworker.postMessage({position_y: position_y, position_x: position_x, last_move: last_move, jump: jump, punch: punch, kick: kick, screen: screen});
            }
        }
    if (e.keyCode == '40') //down cursor
        {
        if(gameover==false && no_move==false)
            {
            bend=true; punch=false; jump=false; kick=false;
            }
        }
    if (e.keyCode == '90') //z
        {
        if (gameover==false && no_move==false && position_y==206 && position_x<350 && position_x>-40 && jump==false && punch==false && kick==false)
            {
            jump=true; punch=true; bend=false; kick=false;
            power=power-3; 
            jumpworker.postMessage({position_y: position_y, position_x: position_x, last_move: last_move, jump: jump, punch: punch, kick: kick, screen: screen});} 
        if (gameover==false && in_computer==true) // in computer
            {
            stop_nuclear_fusion_container_now=true;
            stop_nuclear_fusion_container_3_min=false;
            }
        }
    if (e.keyCode == '88') //x
        {
        if (gameover==false && no_move==false && position_y==206 && position_x<350 && position_x>-40 && jump==false && punch==false && kick==false)
            {
            punch=true; jump=false; bend=false; kick=false;
            power=power-1; 
            jumpworker.postMessage({position_y: position_y, position_x: position_x, last_move: last_move, jump: jump, punch: punch, kick: kick, screen: screen});
            }
        if (gameover==false && in_computer==true) // in computer
            {
            stop_nuclear_fusion_container_3_min=true; 
            stop_nuclear_fusion_container_now=false;
            }
        }
    if (e.keyCode == '67') //c
        {
        if (gameover==false && no_move==false && position_y==206 && position_x<350 && position_x>-40 && jump==false && punch==false && kick==false)
            {
            punch=false; jump=false; bend=false; kick=true;
            power=power-2; 
            jumpworker.postMessage({position_y: position_y, position_x: position_x, last_move: last_move, jump: jump, punch: punch, kick: kick, screen: screen});
            }
        }
    if (e.keyCode == '13') //enter
        {
        if (screen==-1)
            {
            restart();
            }
        if (gameover==false && screen==1 && position_x>60 && position_x<90 && position_y==206 && bend==false)
            {
            screen=0;
            going_out=true;
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;
            timeanimation=0;
            init_timeanimationworker();
            }
        if (gameover==false && screen==6 && position_x>250 && position_x<270 && position_y==206 && bend==false && telepheric_left==false && telepheric_called_left==false)
            {
            honor=honor+50;
            telepheric_called_left=true;
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;        
            timeanimation=0;
            init_timeanimationworker();
            }
        if (gameover==false && screen==7 && position_x>30 && position_x<50 && position_y==206 && bend==false && telepheric_left==true)
            {
            no_move=true;
            honor=honor+1000;
            position_old_telepheric_x=undefined;
            telepheric_left=false;
            telepheric_move_to_right=true;
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;        
            timeanimation=0;
            init_timeanimationworker();
            }
        if (gameover==false && screen==10 && position_x<320 && position_x>300 && position_y==206 && bend==false && telepheric_right==true)
            {
            no_move=true;
            /*honor=honor-1000;*/
            position_old_telepheric_x=undefined;
            telepheric_right=false;
            telepheric_move_to_left=true;
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;        
            timeanimation=0;
            init_timeanimationworker();
            } 
       if (gameover==false && screen==14 && position_x>220 && position_x<240 && position_y==206 && bend==false && elevator_up==true)
            {
            no_move=true;
            honor=honor+1000;
            elevator_up=false;
            elevator_going_down=true;
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;        
            timeanimation=0;
            init_timeanimationworker();
            }
       if (gameover==false && screen==17 && position_x>220 && position_x<240 && position_y==206 && bend==false && elevator_down==true)
            {
            no_move=true;
            /*honor=honor-1000;*/
            elevator_down=false;
            elevator_going_up=true;
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;        
            timeanimation=0;
            init_timeanimationworker();
            }

        if (gameover==false && screen==20 && position_x>295 && position_x<310 && position_y==206 && bend==false && in_computer==false && stop_nuclear_fusion_container_now==false && stop_nuclear_fusion_container_3_min==false)
            {
            no_move=true;
            honor=honor+1000;
            in_computer=true;
            }
        else if (gameover==false && screen==20 && position_x>295 && position_x<310 && position_y==206 && bend==false && in_computer==true && (stop_nuclear_fusion_container_now==true || stop_nuclear_fusion_container_3_min==true))
            {
            no_move=false;
            honor=honor+10000;
            in_computer=false;
            command_executed=true;
            if (timeanimationworker!==undefined){timeanimationworker.terminate();}
            timeanimationworker=undefined;
            timeanimation=0;
            init_timeanimationworker();
            if (timeworker!==undefined){timeworker.terminate();}
            timeworker=undefined;
            time=180;
            init_timeworker(); 
           }
        else if (gameover==false && screen==20 && position_x>295 && position_x<310 && position_y==206 && bend==false && in_computer==true && (stop_nuclear_fusion_container_now==false && stop_nuclear_fusion_container_3_min==false)){terminal_available=true; no_move=false; in_computer=false;}
        }
    if (e.keyCode == '27') //escape
        {
        screen=-1;
        }
    }
document.onkeyup = checkKeyUp;
function checkKeyUp(e) 
    {
    if (e.keyCode == '37') //left cursor
        {
        velocity_left=0;
        run_animation_left=0;
        }
    if (e.keyCode == '39') //right cursor
        {
        velocity_right=0;
        run_animation_right=0;
        }
    if (e.keyCode == '38') //up cursor
        {
        jump=false;
        jumpworker.postMessage({position_y: position_y, position_x: position_x, last_move: last_move, jump: jump, punch: punch, kick: kick, screen: screen});
        gravityworker.postMessage({position_y: position_y, position_x: position_x, screen: screen, telepheric_left: telepheric_left, telepheric_right: telepheric_right});
        }
    if (e.keyCode == '40') //down cursor
        {
        bend=false;
        }
    if (e.keyCode == '90') //z
        {
        punch=false;
        jump=false;
        jumpworker.postMessage({position_y: position_y, position_x: position_x, last_move: last_move, jump: jump, punch: punch, kick: kick, screen: screen});
        gravityworker.postMessage({position_y: position_y, position_x: position_x, screen: screen, telepheric_left: telepheric_left, telepheric_right: telepheric_right});
        }
    if (e.keyCode == '88') //x
        {
        punch=false;
        jumpworker.postMessage({position_y: position_y, position_x: position_x, last_move: last_move, jump: jump, punch: punch, kick: kick, screen: screen});
        }
    if (e.keyCode == '67') //c
        {
        kick=false;
        jumpworker.postMessage({position_y: position_y, position_x: position_x, last_move: last_move, jump: jump, punch: punch, kick: kick, screen: screen});
        }
    if (e.keyCode == '13') //enter
        {
        }
    }

// WEB WORKERS
var timeanimationworker;
function init_timeanimationworker() 
    {
    if (typeof(Worker) !== "undefined") 
        {
        if (typeof(timeanimationworker) == "undefined") 
            {
            timeanimationworker = new Worker("timeanimationworker.js");
            }
        timeanimationworker.onmessage = function(event_timeanimation) 
            {
            timeanimation=event_timeanimation.data.timeanimation;
            };
        }
    }

var timeworker;
function init_timeworker() 
    {
    if (typeof(Worker) !== "undefined") 
        {
        if (typeof(timeworker) == "undefined") 
            {
            timeworker = new Worker("timeworker.js");
            }
        timeworker.onmessage = function(event_time) 
            {
            time=event_time.data.time;
            };
        }
    }

var gravityworker;
function init_gravityworker() 
    {
    if (typeof(Worker) !== "undefined") 
        {
        if (typeof(gravityworker) == "undefined") 
            {
            gravityworker = new Worker("gravityworker.js");
            }
        gravityworker.onmessage = function(event_gravity) 
            {
            position_y=event_gravity.data.position_y;
            gravityworker.postMessage({position_y: position_y, position_x: position_x, screen: screen, telepheric_left: telepheric_left, telepheric_right: telepheric_right});
            };
        }
    }

var jumpworker;
function init_jumpworker() 
    {
    if (typeof(Worker) !== "undefined") 
        {
        if (typeof(jumpworker) == "undefined") 
            {
            jumpworker = new Worker("jumpworker.js");
            }
        jumpworker.onmessage = function(event_jump) 
            {
            if ((jump==true && punch==false) || (jump==true && punch==true) || (jump==false && punch==true) || (kick==true)) //jump or fly uppercut or run punch or run kick
                {
                position_y=event_jump.data.position_y;
                position_x=event_jump.data.position_x;
                punch=event_jump.data.punch;
                kick=event_jump.data.kick;
                jumpworker.postMessage({position_y: position_y, position_x: position_x, last_move: last_move, jump: jump, punch: punch, kick: kick, screen: screen});
                }
            if (position_y<151){jump=false; punch=false; gravityworker.postMessage({position_y: position_y, position_x: position_x, screen: screen, telepheric_left: telepheric_left, telepheric_right: telepheric_right});}
            
            };
        }
    }


/*
// PROGRESIVE WEB 
if ('serviceWorker' in navigator) 
    {
    navigator.serviceWorker.register('servicew.js')
    .then(function () 
        {
        console.log('service worker registered');
        })
    .catch(function () 
        {
        console.warn('service worker failed');
        });
    }*/
// PRELOAD IMAGES
addLoadEvent(preloader);
// INIT workers
init_timeanimationworker();
init_timeworker();
init_gravityworker();
init_jumpworker();
// INTERVAL DRAW FRAMES
interval=window.setInterval(draw,17);
