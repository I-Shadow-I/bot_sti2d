const Discord = require("discord.js");
const moment = require('moment');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();
var prefix = "/";
var heure = "";
var matière ="";
let lundi = ["aucun","aucun","aucun","aucun","aucun","aucun","aucun","aucun","aucun"]
let mardi = ["aucun","aucun","aucun","aucun","aucun","aucun","aucun","aucun","aucun"]
let mercredi = ["aucun","aucun","aucun","aucun","aucun","aucun","aucun","aucun","aucun"]
let jeudi = ["aucun","aucun","aucun","aucun","aucun","aucun","aucun","aucun","aucun"]
let vendredi = ["aucun","aucun","aucun","aucun","aucun","aucun","aucun","aucun","aucun"]
var semaine = 0;
var horaire ="";
var day;



client.login(process.env.BOT_TOKEN);

client.on("ready", ()=>{
    console.log("The bot is ready !");
    client.user.setActivity(`Agenda`)

   setInterval(()=> {
       time();
   },55000);

    
});

client.on("message", message =>{

   
    

    if(!message.guild) return
    if(message.author.bot) return
    if(message.channel.id === `692066741156577401`){
    	if(message.content.startsWith('!mardi')){
            var arg = message.content.split(/ +/g);
            var cmd = arg.shift().toLowerCase
            console.log(arg);
            heure = arg[0];
            matière = arg[1];
            console.log(heure + ' / ' + matière);

            if(heure ==="8"){
                mardi[0] = matière;

            }

            if(heure ==="9"){
                mardi[1] = matière;
                
            }

            if(heure ==="10"){
                mardi[2] = matière;
                
            }

            if(heure ==="11"){
                mardi[3] = matière;
                
            }

            if(heure ==="13"){
                mardi[4] = matière;
                
            }

            if(heure ==="14"){
                mardi[5] = matière;
                
            }

            if(heure ==="15"){
                mardi[6] = matière;
                
            }

            if(heure ==="16"){
                mardi[7] = matière;
                
            }

            if(heure ==="17"){
                mardi[8] = matière;
                
            }

            message.delete();
            console.log(mardi);
        }


        //***************************************************************************************************** */
        

        if(message.content.startsWith('!lundi')){
            var arg = message.content.split(/ +/g);
            var cmd = arg.shift().toLowerCase
            console.log(arg);
            heure = arg[0];
            matière = arg[1];
            console.log(heure + ' / ' + matière);

            if(heure ==="8"){
                lundi[0] = matière;

            }

            if(heure ==="9"){
                lundi[1] = matière;
                
            }

            if(heure ==="10"){
                lundi[2] = matière;
                
            }

            if(heure ==="11"){
                lundi[3] = matière;
                
            }

            if(heure ==="13"){
                lundi[4] = matière;
                
            }

            if(heure ==="14"){
                lundi[5] = matière;
                
            }

            if(heure ==="15"){
                lundi[6] = matière;
                
            }

            if(heure ==="16"){
                lundi[7] = matière;
                
            }

            if(heure ==="17"){
                lundi[8] = matière;
                
            }

            message.delete();
            console.log(lundi);

            

        }
        
        //************************************************************************************************************* */


        if(message.content.startsWith('!mercredi')){
            var arg = message.content.split(/ +/g);
            var cmd = arg.shift().toLowerCase
            console.log(arg);
            heure = arg[0];
            matière = arg[1];
            console.log(heure + ' / ' + matière);

            if(heure ==="8"){
                mercredi[0] = matière;

            }

            if(heure ==="9"){
                mercredi[1] = matière;
                
            }

            if(heure ==="10"){
                mercredi[2] = matière;
                
            }

            if(heure ==="11"){
                mercredi[3] = matière;
                
            }

            if(heure ==="13"){
                mercredi[4] = matière;
                
            }

            if(heure ==="14"){
                mercredi[5] = matière;
                
            }

            if(heure ==="15"){
                mercredi[6] = matière;
                
            }

            if(heure ==="16"){
                mercredi[7] = matière;
                
            }

            if(heure ==="17"){
                mercredi[8] = matière;
                
            }

            message.delete();
            console.log(mercredi);

        }


        //************************************************************************ */



        if(message.content.startsWith('!jeudi')){

            var arg = message.content.split(/ +/g);
            var cmd = arg.shift().toLowerCase
            console.log(arg);
            heure = arg[0];
            matière = arg[1];
            console.log(heure + ' / ' + matière);

            if(heure ==="8"){
                jeudi[0] = matière;

            }

            if(heure ==="9"){
                jeudi[1] = matière;
                
            }

            if(heure ==="10"){
                jeudi[2] = matière;
                
            }

            if(heure ==="11"){
                jeudi[3] = matière;
                
            }

            if(heure ==="13"){
                jeudi[4] = matière;
                
            }

            if(heure ==="14"){
                jeudi[5] = matière;
                
            }

            if(heure ==="15"){
                jeudi[6] = matière;
                
            }

            if(heure ==="16"){
                jeudi[7] = matière;
                
            }

            if(heure ==="17"){
                jeudi[8] = matière;
                
            }

            message.delete();
            console.log(jeudi);


        }


//*********************************************************************************** */


        if(message.content.startsWith('!vendredi')){
            var arg = message.content.split(/ +/g);
            var cmd = arg.shift().toLowerCase
            console.log(arg);
            heure = arg[0];
            matière = arg[1];
            console.log(heure + ' / ' + matière);

            if(heure ==="8"){
                vendredi[0] = matière;

            }

            if(heure ==="9"){
                vendredi[1] = matière;
                
            }

            if(heure ==="10"){
                vendredi[2] = matière;
                
            }

            if(heure ==="11"){
                vendredi[3] = matière;
                
            }

            if(heure ==="13"){
                vendredi[4] = matière;
                
            }

            if(heure ==="14"){
                vendredi[5] = matière;
                
            }

            if(heure ==="15"){
                vendredi[6] = matière;
                
            }

            if(heure ==="16"){
                vendredi[7] = matière;
                
            }

            if(heure ==="17"){
                vendredi[8] = matière;
                
            }

            message.delete();
            console.log(vendredi);

        }

//********************************************************************** */

        if(message.content.startsWith('!see')){
            message.delete();

            const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('Agenda TSTI2D')
      // Set the color of the embed
      .setColor('#00e4ff')
      // Set the main content of the embed
      .setDescription('Voici votre emploi du temps!')
      .addField("----------------------------",".")
      .addField("__Lundi__","**8h** : " + lundi[0] + " / " + "**9h** : " + lundi[1] + " / " + "**10h** : " + lundi[2] + " / " + "**11h** : " + lundi[3] + " / " + "**13h** : " + lundi[4] + " / " + "**14h** : " + lundi[5] + " / " + "**15h** : " + lundi[6] + " / " + "**16h** : " + lundi[7] + " / " + "**17h** : " + lundi[8])
      .addField("----------------------------",".")
      .addField("__Mardi__","**8h** : " + mardi[0] + " / " + "**9h** : " + mardi[1] + " / " + "**10h** : " + mardi[2] + " / " + "**11h** : " + mardi[3] + " / " + "**13h** : " + mardi[4] + " / " + "**14h** : " + mardi[5] + " / " + "**15h** : " + mardi[6] + " / " + "**16h** : " + mardi[7] + " / " + "**17h** : " + mardi[8])
      .addField("----------------------------",".")
      .addField("__Mercredi__","**8h** : " + mercredi[0] + " / " + "**9h** : " + mercredi[1] + " / " + "**10h** : " + mercredi[2] + " / " + "**11h** : " + mercredi[3] + " / " + "**13h** : " + mercredi[4] + " / " + "**14h** : " + mercredi[5] + " / " + "**15h** : " + mercredi[6] + " / " + "**16h** : " + mercredi[7] + " / " + "**17h** : " + mercredi[8])
      .addField("----------------------------",".")
      .addField("__Jeudi__","**8h** : " + jeudi[0] + " / " + "**9h** : " + jeudi[1] + " / " + "**10h** : " + jeudi[2] + " / " + "**11h** : " + jeudi[3] + " / " + "**13h** : " + jeudi[4] + " / " + "**14h** : " + jeudi[5] + " / " + "**15h** : " + jeudi[6] + " / " + "**16h** : " + jeudi[7] + " / " + "**17h** : " + jeudi[8])
      .addField("----------------------------",".")
      .addField("__vendredi__","**8h** : " + vendredi[0] + " / " + "**9h** : " + vendredi[1] + " / " + "**10h** : " + vendredi[2] + " / " + "**11h** : " + vendredi[3] + " / " + "**13h** : " + vendredi[4] + " / " + "**14h** : " + vendredi[5] + " / " + "**15h** : " + vendredi[6] + " / " + "**16h** : " + vendredi[7] + " / " + "**17h** : " + vendredi[8]);
   // Send the embed to the same channel as the message
    message.channel.send(embed);
            


        }

        if(message.content.startsWith('!reload')){
            message.delete();
            
            
            lundi[0] = "aucun";
            lundi[1] = "aucun";
            lundi[2] = "aucun";
            lundi[3] = "aucun";
            lundi[4] = "aucun";
            lundi[5] = "aucun";
            lundi[6] = "aucun";
            lundi[7] = "aucun";
            lundi[8] = "aucun";

            mardi[0] = "aucun";
            mardi[1] = "aucun";
            mardi[2] = "aucun";
            mardi[3] = "aucun";
            mardi[4] = "aucun";
            mardi[5] = "aucun";
            mardi[6] = "aucun";
            mardi[7] = "aucun";
            mardi[8] = "aucun";

            jeudi[0] = "aucun";
            jeudi[1] = "aucun";
            jeudi[2] = "aucun";
            jeudi[3] = "aucun";
            jeudi[4] = "aucun";
            jeudi[5] = "aucun";
            jeudi[6] = "aucun";
            jeudi[7] = "aucun";
            jeudi[8] = "aucun";

            mercredi[0] = "aucun";
            mercredi[1] = "aucun";
            mercredi[2] = "aucun";
            mercredi[3] = "aucun";
            mercredi[4] = "aucun";
            mercredi[5] = "aucun";
            mercredi[6] = "aucun";
            mercredi[7] = "aucun";
            mercredi[8] = "aucun";

            vendredi[0] = "aucun";
            vendredi[1] = "aucun";
            vendredi[2] = "aucun";
            vendredi[3] = "aucun";
            vendredi[4] = "aucun";
            vendredi[5] = "aucun";
            vendredi[6] = "aucun";
            vendredi[7] = "aucun";
            vendredi[8] = "aucun";

            

    
        }
        
        if(message.content.startsWith('!info')){
            message.delete();

            const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('Info Bot')
      // Set the color of the embed
      .setColor('#00e4ff')
      // Set the main content of the embed
      .setDescription('Ce bot permet de creer un emploi du temps pour les terminales STI2D, pour cela des commandes vous sont données.')
      .addField("----------------------------",".")
      .addField("Ajouter une heure de cours :","!<jour> <heure de debut> <matière>")
      .addField("<jour>","Les jours sont lundi, mardi, mercredi, jeudi et vendredi. Il ne faut pas mettre de majuscule.")
      .addField("<heure de debut>","Les heures sont seulement des heures piles, les possibilités sont 8, 9, 10, 11, 13, 14, 15, 16, 17 et sont automatiquement réglées pour 1h de cours. Il ne faut pas mettre de h")
      .addField("<matière>","Mettre la matière du cours sans espace s'il y en a (physique chimique -> physique-chimique).")
      .addField("Exemple :","!lundi 8 Math  // pour une séance de 8h à 9h de math le lundi (ne pas oublier les espaces entre <jour> et <heure de debut> et entre <heure de debut> et <matiere>.")
      .addField("Voir l'agenda :","!see")
      .addField("info :","En cas d'erreur de cours refaire la commande avec le mot `aucun` à la place de la matière (ex: !lundi 8 aucun). L'agenda est automatiquement renitialisé le vendredi soir à 18h00, donc possible de remplir l'agenda de la semaine suivante le vendredi soir.")
      .addField("Question/aide :","Pour toutes demandes (ajouts, idées, erreurs ...) merci de contacter Cossalter Etienne#8773.")
      .setFooter("Created by Cossalter Etienne#8773")
      
    message.channel.send(embed);
        }

        
    }


    if(message.channel.id === `692067052831113260`){
        if(message.content.startsWith('!see')){
            message.delete();

            const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('Agenda TSTI2D')
      // Set the color of the embed
      .setColor('#00e4ff')
      // Set the main content of the embed
      .setDescription('Voici votre emploi du temps!')
      .addField("----------------------------",".")
      .addField("__Lundi__","**8h** : " + lundi[0] + " / " + "**9h** : " + lundi[1] + " / " + "**10h** : " + lundi[2] + " / " + "**11h** : " + lundi[3] + " / " + "**13h** : " + lundi[4] + " / " + "**14h** : " + lundi[5] + " / " + "**15h** : " + lundi[6] + " / " + "**16h** : " + lundi[7] + " / " + "**17h** : " + lundi[8])
      .addField("----------------------------",".")
      .addField("__Mardi__","**8h** : " + mardi[0] + " / " + "**9h** : " + mardi[1] + " / " + "**10h** : " + mardi[2] + " / " + "**11h** : " + mardi[3] + " / " + "**13h** : " + mardi[4] + " / " + "**14h** : " + mardi[5] + " / " + "**15h** : " + mardi[6] + " / " + "**16h** : " + mardi[7] + " / " + "**17h** : " + mardi[8])
      .addField("----------------------------",".")
      .addField("__Mercredi__","**8h** : " + mercredi[0] + " / " + "**9h** : " + mercredi[1] + " / " + "**10h** : " + mercredi[2] + " / " + "**11h** : " + mercredi[3] + " / " + "**13h** : " + mercredi[4] + " / " + "**14h** : " + mercredi[5] + " / " + "**15h** : " + mercredi[6] + " / " + "**16h** : " + mercredi[7] + " / " + "**17h** : " + mercredi[8])
      .addField("----------------------------",".")
      .addField("__Jeudi__","**8h** : " + jeudi[0] + " / " + "**9h** : " + jeudi[1] + " / " + "**10h** : " + jeudi[2] + " / " + "**11h** : " + jeudi[3] + " / " + "**13h** : " + jeudi[4] + " / " + "**14h** : " + jeudi[5] + " / " + "**15h** : " + jeudi[6] + " / " + "**16h** : " + jeudi[7] + " / " + "**17h** : " + jeudi[8])
      .addField("----------------------------",".")
      .addField("__vendredi__","**8h** : " + vendredi[0] + " / " + "**9h** : " + vendredi[1] + " / " + "**10h** : " + vendredi[2] + " / " + "**11h** : " + vendredi[3] + " / " + "**13h** : " + vendredi[4] + " / " + "**14h** : " + vendredi[5] + " / " + "**15h** : " + vendredi[6] + " / " + "**16h** : " + vendredi[7] + " / " + "**17h** : " + vendredi[8]);
    // Send the embed to the same channel as the message
    message.channel.send(embed);
            
    message.delete(message.author);

        }

        if(message.content.startsWith('!info')){
           

            const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('Info Bot')
      // Set the color of the embed
      .setColor('#00e4ff')
      // Set the main content of the embed
      .setDescription('Ce bot permet de creer un emploi du temps pour les terminales STI2D, pour cela des commandes vous sont données.')
      .addField("Voir l'agenda :","!see")
      .addField("Question/aide :","Pour toute demande (ajouts, idées ...) merci de contacter Cossalter Etienne#8773.")
      .setFooter("Created by Cossalter Etienne#8773")
      
    message.channel.send(embed);

 message.delete(message.author);
        }

        
    }


});

function time(){

    var today = new Date();

    var h = today.getUTCHours() + 1;
    var m = today.getMinutes();
    var d = today.getDay() - 1;
    var j = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
    day = j[d];
    horaire = h + ':' + m;
    console.log(day+ ' / ' + h + ':' + m);

    var msg_channel = client.channels.cache.get("692067052831113260");
    
    if(horaire ==="18:30"){
        const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('Agenda TSTI2D')
      // Set the color of the embed
      .setColor('#00e4ff')
      // Set the main content of the embed
      .setDescription('Voici votre emploi du temps!')
      .addField("----------------------------",".")
      .addField("__Lundi__","**8h** : " + lundi[0] + " / " + "**9h** : " + lundi[1] + " / " + "**10h** : " + lundi[2] + " / " + "**11h** : " + lundi[3] + " / " + "**13h** : " + lundi[4] + " / " + "**14h** : " + lundi[5] + " / " + "**15h** : " + lundi[6] + " / " + "**16h** : " + lundi[7] + " / " + "**17h** : " + lundi[8])
      .addField("----------------------------",".")
      .addField("__Mardi__","**8h** : " + mardi[0] + " / " + "**9h** : " + mardi[1] + " / " + "**10h** : " + mardi[2] + " / " + "**11h** : " + mardi[3] + " / " + "**13h** : " + mardi[4] + " / " + "**14h** : " + mardi[5] + " / " + "**15h** : " + mardi[6] + " / " + "**16h** : " + mardi[7] + " / " + "**17h** : " + mardi[8])
      .addField("----------------------------",".")
      .addField("__Mercredi__","**8h** : " + mercredi[0] + " / " + "**9h** : " + mercredi[1] + " / " + "**10h** : " + mercredi[2] + " / " + "**11h** : " + mercredi[3] + " / " + "**13h** : " + mercredi[4] + " / " + "**14h** : " + mercredi[5] + " / " + "**15h** : " + mercredi[6] + " / " + "**16h** : " + mercredi[7] + " / " + "**17h** : " + mercredi[8])
      .addField("----------------------------",".")
      .addField("__Jeudi__","**8h** : " + jeudi[0] + " / " + "**9h** : " + jeudi[1] + " / " + "**10h** : " + jeudi[2] + " / " + "**11h** : " + jeudi[3] + " / " + "**13h** : " + jeudi[4] + " / " + "**14h** : " + jeudi[5] + " / " + "**15h** : " + jeudi[6] + " / " + "**16h** : " + jeudi[7] + " / " + "**17h** : " + jeudi[8])
      .addField("----------------------------",".")
      .addField("__vendredi__","**8h** : " + vendredi[0] + " / " + "**9h** : " + vendredi[1] + " / " + "**10h** : " + vendredi[2] + " / " + "**11h** : " + vendredi[3] + " / " + "**13h** : " + vendredi[4] + " / " + "**14h** : " + vendredi[5] + " / " + "**15h** : " + vendredi[6] + " / " + "**16h** : " + vendredi[7] + " / " + "**17h** : " + vendredi[8]);
    // Send the embed to the same channel as the message
    msg_channel.send(embed);
        msg_channel.send("@here");
    }

    if((day=== 'vendredi')&&(horaire === "18:30")){
        lundi[0] = "aucun";
            lundi[1] = "aucun";
            lundi[2] = "aucun";
            lundi[3] = "aucun";
            lundi[4] = "aucun";
            lundi[5] = "aucun";
            lundi[6] = "aucun";
            lundi[7] = "aucun";
            lundi[8] = "aucun";

            mardi[0] = "aucun";
            mardi[1] = "aucun";
            mardi[2] = "aucun";
            mardi[3] = "aucun";
            mardi[4] = "aucun";
            mardi[5] = "aucun";
            mardi[6] = "aucun";
            mardi[7] = "aucun";
            mardi[8] = "aucun";

            jeudi[0] = "aucun";
            jeudi[1] = "aucun";
            jeudi[2] = "aucun";
            jeudi[3] = "aucun";
            jeudi[4] = "aucun";
            jeudi[5] = "aucun";
            jeudi[6] = "aucun";
            jeudi[7] = "aucun";
            jeudi[8] = "aucun";

            mercredi[0] = "aucun";
            mercredi[1] = "aucun";
            mercredi[2] = "aucun";
            mercredi[3] = "aucun";
            mercredi[4] = "aucun";
            mercredi[5] = "aucun";
            mercredi[6] = "aucun";
            mercredi[7] = "aucun";
            mercredi[8] = "aucun";

            vendredi[0] = "aucun";
            vendredi[1] = "aucun";
            vendredi[2] = "aucun";
            vendredi[3] = "aucun";
            vendredi[4] = "aucun";
            vendredi[5] = "aucun";
            vendredi[6] = "aucun";
            vendredi[7] = "aucun";
            vendredi[8] = "aucun";

    }
     

    if((h>7) && (h <22)){
        if(day=== "lundi"){
        
            if(lundi[0]!= "aucun"){
                if (horaire==="7:30"){
                msg_channel.send(`@everyone cours de ` + lundi[0] + " dans 30 min !!!");
                }
            }
            if(lundi[1]!= "aucun"){
                if (horaire==="8:30"){
                    msg_channel.send(`@everyone cours de ` + lundi[1] + " dans 30 min !!!");
                    }
            }
            if(lundi[2]!= "aucun"){
                if (horaire==="9:30"){
                    msg_channel.send(`@everyone cours de ` + lundi[2] + " dans 30 min !!!");
                    }
            }
            if(lundi[3]!= "aucun"){
                if (horaire==="10:30"){
                    msg_channel.send(`@everyone cours de ` + lundi[3] + " dans 30 min !!!");
                    }
            }
            if(lundi[4]!= "aucun"){
                if (horaire==="12:30"){
                    msg_channel.send(`@everyone cours de ` + lundi[4] + " dans 30 min !!!");
                    }
            }
            if(lundi[5]!= "aucun"){
                if (horaire==="13:30"){
                    msg_channel.send(`@everyone cours de ` + lundi[5] + " dans 30 min !!!");
                    }
            }
            if(lundi[6]!= "aucun"){
                if (horaire=="14:30"){
                    msg_channel.send(`@everyone cours de ` + lundi[6] + " dans 30 min !!!");
                    }
            }
            if(lundi[7]!= "aucun"){
                if (horaire==="15:30"){
                    msg_channel.send(`@everyone cours de ` + lundi[7] + " dans 30 min !!!");
                    }
            }
            if(lundi[8]!= "aucun"){
                if (horaire==="16:30"){
                    msg_channel.send(`@everyone cours de ` + lundi[8] + " dans 30 min !!!");
                    }
            }
            console.log("ok1");
        }
        
        //******************************* */

        if(day=== "mardi"){
        
            if(mardi[0]!= "aucun"){
                if (horaire==="7:30"){
                    msg_channel.send(`@everyone cours de ` + mardi[0] + " dans 30 min !!!");
                    }
            }
            if(mardi[1]!= "aucun"){
                if (horaire==="8:30"){
                    msg_channel.send(`@everyone cours de ` + mardi[1] + " dans 30 min !!!");
                    }
            }
            if(mardi[2]!= "aucun"){
                if (horaire==="9:30"){
                    msg_channel.send(`@everyone cours de ` + mardi[2] + " dans 30 min !!!");
                    }
            }
            if(mardi[3]!= "aucun"){
                if (horaire==="10:30"){
                    msg_channel.send(`@everyone cours de ` + mardi[3] + " dans 30 min !!!");
                    }
            }
            if(mardi[4]!= "aucun"){
                if (horaire==="12:30"){
                    msg_channel.send(`@everyone cours de ` + mardi[4] + " dans 30 min !!!");
                    }
            }
            if(mardi[5]!= "aucun"){
                if (horaire==="13:30"){
                    msg_channel.send(`@everyone cours de ` + mardi[5] + " dans 30 min !!!");
                    }
            }
            if(mardi[6]!= "aucun"){
                if (horaire==="14:30"){
                    msg_channel.send(`@everyone cours de ` + mardi[6] + " dans 30 min !!!");
                    }
            }
            if(mardi[7]!= "aucun"){
                if (horaire==="15:30"){
                    msg_channel.send(`@everyone cours de ` + mardi[7] + " dans 30 min !!!");
                    }
            }
            if(mardi[8]!= "aucun"){
                if (horaire==="16:30"){
                    msg_channel.send(`@everyone cours de ` + mardi[8] + " dans 30 min !!!");
                    }
            }
            console.log("ok2");
        }

        //********************************** */

        if(day=== "mercredi"){
        
            if(mercredi[0]!= "aucun"){
                if (horaire==="7:30"){
                msg_channel.send(`@everyone cours de ` + mercredi[0] + " dans 30 min !!!");
                }
            }
            if(mercredi[1]!= "aucun"){
                if (horaire==="8:30"){
                    msg_channel.send(`@everyone cours de ` + mercredi[1] + " dans 30 min !!!");
                    }
            }
            if(mercredi[2]!= "aucun"){
                if (horaire==="9:30"){
                    msg_channel.send(`@everyone cours de ` + mercredi[2] + " dans 30 min !!!");
                    }
            }
            if(mercredi[3]!= "aucun"){
                if (horaire==="10:30"){
                    msg_channel.send(`@everyone cours de ` + mercredi[3] + " dans 30 min !!!");
                    }
            }
            if(mercredi[4]!= "aucun"){
                if (horaire==="12:30"){
                    msg_channel.send(`@everyone cours de ` + mercredi[4] + " dans 30 min !!!");
                    }
            }
            if(mercredi[5]!= "aucun"){
                if (horaire==="13:30"){
                    msg_channel.send(`@everyone cours de ` + mercredi[5] + " dans 30 min !!!");
                    }
            }
            if(mercredi[6]!= "aucun"){
                if (horaire==="14:30"){
                    msg_channel.send(`@everyone cours de ` + mercredi[6] + " dans 30 min !!!");
                    }
            }
            if(mercredi[7]!= "aucun"){
                if (horaire==="15:30"){
                    msg_channel.send(`@everyone cours de ` + mercredi[7] + " dans 30 min !!!");
                    }
            }
            if(mercredi[8]!= "aucun"){
                if (horaire==="16:30"){
                    msg_channel.send(`@everyone cours de ` + mercredi[8] + " dans 30 min !!!");
                    }
            }
            console.log("ok3");
        }

        //********************************* */

        if(day=== "jeudi"){
        
            if(jeudi[0]!= "aucun"){
                if (horaire==="7:30"){
                msg_channel.send(`@everyone cours de ` + jeudi[0] + " dans 30 min !!!");
                }
            }
            if(jeudi[1]!= "aucun"){
                if (horaire==="8:30"){
                    msg_channel.send(`@everyone cours de ` + jeudi[1] + " dans 30 min !!!");
                    }
            }
            if(jeudi[2]!= `@here cours de `){
                if (horaire==="9:30"){
                    msg_channel.send(`@everyone cours de ` + jeudi[2] + " dans 30 min !!!");
                    }
            }
            if(jeudi[3]!= "aucun"){
                if (horaire==="10:30"){
                    msg_channel.send(`@everyone cours de ` + jeudi[3] + " dans 30 min !!!");
                    }
            }
            if(jeudi[4]!= "aucun"){
                if (horaire==="12:30"){
                    msg_channel.send(`@everyone cours de ` + jeudi[4] + " dans 30 min !!!");
                    }
            }
            if(jeudi[5]!= "aucun"){
                if (horaire==="13:30"){
                    msg_channel.send(`@everyone cours de ` + jeudi[5] + " dans 30 min !!!");
                    }
            }
            if(jeudi[6]!= "aucun"){
                if (horaire==="14:30"){
                    msg_channel.send(`@everyone cours de ` + jeudi[6] + " dans 30 min !!!");
                    }
            }
            if(jeudi[7]!= "aucun"){
                if (horaire==="15:30"){
                    msg_channel.send(`@everyone cours de ` + jeudi[7] + " dans 30 min !!!");
                    }
            }
            if(jeudi[8]!= "aucun"){
                if (horaire==="16:30"){
                    msg_channel.send(`@everyone cours de ` + jeudi[8] + " dans 30 min !!!");
                    }
            }
            console.log("ok4");
        }

        //********************************* */

        if(day=== "vendredi"){
        
            if(vendredi[0]!= "aucun"){
                if (horaire==="7:30"){
                msg_channel.send(`@everyone cours de ` + vendredi[0] + " dans 30 min !!!");
                }
            }
            if(vendredi[1]!= "aucun"){
                if (horaire==="8:30"){
                    msg_channel.send(`@everyone cours de ` + vendredi[1] + " dans 30 min !!!");
                    }
            }
            if(vendredi[2]!= "aucun"){
                if (horaire==="9:30"){
                    msg_channel.send(`@everyone cours de ` + vendredi[2] + " dans 30 min !!!");
                    }
            }
            if(vendredi[3]!= "aucun"){
                if (horaire==="10:30"){
                    msg_channel.send(`@everyone cours de ` + vendredi[3] + " dans 30 min !!!");
                    }
            }
            if(vendredi[4]!= "aucun"){
                if (horaire==="12:30"){
                    msg_channel.send(`@everyone cours de ` + vendredi[4] + " dans 30 min !!!");
                    }
            }
            if(vendredi[5]!= "aucun"){
                if (horaire==="13:30"){
                    msg_channel.send(`@everyone cours de ` + vendredi[5] + " dans 30 min !!!");
                    }
            }
            if(vendredi[6]!= "aucun"){
                if (horaire==="14:30"){
                    msg_channel.send(`@everyone cours de ` + vendredi[6] + " dans 30 min !!!");
                    }
            }
            if(vendredi[7]!= "aucun"){
                if (horaire==="15:30"){
                    msg_channel.send(`@everyone cours de ` + vendredi[7] + " dans 30 min !!!");
                    }
            }
            if(vendredi[8]!= "aucun"){
                if (horaire==="16:30"){
                    msg_channel.send(`@everyone cours de ` + vendredi[8] + " dans 30 min !!!");
                    }
            }
            console.log("ok5");
        }
    }
    
    //***************************************************************** */
    
}
