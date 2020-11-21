const Database = require("./db.js");
const saveOrphanage = require("./saveOrphanage.js");
Database.then(async (db) => {
//   await saveOrphanage(db, {
//     name: "Lar de Amor e Paz",
//     lat: "-8.0239515",
//     lng: "-35.0193676",
//     about:
//       "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
//     whatsapp: "9789789484",
//     images: [
//       "https://images.unsplash.com/photo-1598136490941-30d885318abd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
//       "https://images.unsplash.com/photo-1598454444233-9dc334394ed3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
//       "https://images.unsplash.com/photo-1597387126034-0026d138e5dc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
//       "https://images.unsplash.com/photo-1596962248954-a0381dc10a20?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
//       "https://images.unsplash.com/photo-1599003037886-f8b50bc290c8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
//       "https://images.unsplash.com/photo-1602958169883-016fdb9458dc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
//     ].toString(),
//     instructions:
//       "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
//     openingHours: "Horário de visitas Das 18h até 8h",
//     openOnWeekends: "0",
//   });

  // insert data
  /*await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            openingHours,
            openOnWeekends
        ) VALUES (
            "-8.0239515",
            "35.0193676",
            "Lar das Crianças",
            "Presta assistência a crianças em situação de risco e/ou vulnerabilidade social.",
            "9879798464",
            "https://images.unsplash.com/photo-1598136490941-30d885318abd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha com muito amor para dar.",
             "Horário de visitas Das 18h até 8h",
            "1"
        );
    `)*/

    // await db.run(`
    //         UPDATE orphanages SET name = "Lar dos Meninos"
    // `)
  // fetch data 25:38
  const selectedData = await db.all(`
            SELECT * FROM orphanages
    `);

  // select by ID

//   const select = await db.all(`
//   SELECT * FROM orphanages WHERE id = '4'
//   `)
  
  //   delete data
//   db.run("DELETE FROM orphanages");
  console.log(selectedData); 

// 51:56

});
