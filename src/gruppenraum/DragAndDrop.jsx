import React, { Component } from 'react';
import './stylesheet_moderator_lobby_screen.scss';


export default class Gruppeneinteilung extends Component {
    state = {
        tasks: [
            {name:"Teilnehmer 1",category:"gruppe1", bgcolor: "yellow"},
            {name:"Teilnehmer 2", category:"gruppe1", bgcolor:"pink"},
            {name:"Teilnehmer 3", category:"unassigned", bgcolor:"skyblue"}
          ]
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name === id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }

    render() {
        var tasks = {
            gruppe1: [],
            unassigned: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });

        return (
            
            <div className="container-drag">
                <h2 className="header">Gruppen einteilen Test</h2>
                <div className="gruppe1"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "gruppe1")}}>
                    <span className="task-header">Gruppe 1</span>
                    {tasks.gruppe1}
                </div>
                <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "unassigned")}>
                     <span className="task-header">Unzugewiesen</span>
                     {tasks.unassigned}
                </div>



                <div className="moderator_lobby_screen">
                
                    
                
                <div class="header">
                <ul class="header_list">
                {/* here are 2 classes active because user is on this page */}
                <li class="header_items active"><a>Home</a></li>  
                <li class="header_items"><a>News</a></li>
                <li class="header_items"><a>Contact</a></li>
                <li class="header_items"><a>About</a></li>
                </ul>
                </div>
                <body>

                <div class="wrapper">


                <h2 id="Lobbycode">Lobbycode: 123456</h2>
                <h2 id="Gruppenaufteilung" >Gruppenaufteilung:</h2>



                <div class="flexbox">
                <div class="group1_div">
                    <h2 class="group_1"> Gruppe 1</h2>

                    <ul class="group_1">
                        <li>Spieler 1</li>
                        <li>Spieler 2</li>
                        <li>Spieler 3</li>
                        <li>Spieler 4</li>
                    </ul>
                </div>
                


                <div class="group2_div">
                    <h2 class="group_2"> Gruppe 2</h2>

                    <ul class="group_2">
                        <li>Spieler 4</li>
                        <li>Spieler 5</li>
                        <li>Spieler 6</li>
                        <li>Spieler 7</li>
                    </ul>
                </div>

                <div class="group3_div">
                    <h2 class="group_3"> Gruppe 3</h2> 

                    <ul class="group_3">
                        <li>Spieler 8</li>
                        <li>Spieler 9</li>
                        <li>Spieler 10</li>
                        <li>Spieler 12</li>
                    </ul>
                </div>
                </div>

                <h3>Spieleinstellungen für den Raum des Grauens:</h3>
                    
                <form action="/action_page.php" method="get" class="form_input">

                
                <div class="dropdown_playtime">
                    <label for="playtime">Bitte wählen Sie die gewünschte Spieldauer: </label>
                <select id="playtime" name="playtime">
                    <option value="5min.">5min.</option>
                    <option value="10min.">10min.</option>
                    <option value="12min.">12min.</option>
                    <option value="15min.">15min.</option>
                </select>
                </div> 

                
                <div class="dropdown_numberOfGroups">
                <label for="numberOfGroups">Bitte wählen Sie die gewünschte Anzahl an Gruppen: </label>
                <select id="numberOfGroups" name="numberOfGroups">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                </div> 
                
                <input type="submit" value="Spiel erstellen ! " />
                
                </form>

                </div>
                </body>
                </div>
            </div>
            
        );
    }
}