// FONCTION 1 : estPair
function estPair(nombre){
    return nombre % 2 === 0
}


// FONCTION 2 : sommeTableau(tableau)
function sommeTableau(tableau){
    let somme = 0
    for(const nbre of tableau){
        somme += nbre
    }

    return somme
}


// FONCTION 3 : classifierNote(note)
function classifierNote(note){
    let decision = null

    if(note >= 16){
        decision = "Excellent"
    }else if (note >= 12){
        decision = "Bien"
    }else if(note >=10){
        decision = "Passable"
    }else{
        decision = "Insuffisant"
    }

    return decision
}


// FONCTION 4 : moyenneEtudiant(etudiant)
/**
 * 
 * @param {{nom : string , prenom : string , notes : number[]}} etudiant 
 */
function moyenneEtudiant(etudiant){
    const notes = etudiant.notes
    let somme = 0
    notes.forEach(note =>{
        somme += note
    })

    const moyenne = somme/notes.length()

    return moyenne
}