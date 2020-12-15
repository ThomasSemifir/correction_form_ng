import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';



/*
*ATTENTION C'EST MOCHE
*Attention ne faites pas ça comme ça 
*Il y a des moyens beaucoup plus propres
*Déjà: utiliser des services
*Ensuite: créer un component utilisateur qui va gérer les données
*créer un composant pour afficher les utilisateurs qui va le faire dynamiquement
*/




@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  utilisateur: FormGroup;
  utilisateurList: Object[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.utilisateur = this.fb.group({
      prenom: new FormControl(''),
      nom: new FormControl(''),
      age: new FormControl(''),
      chats: new FormArray([
        new FormGroup({nom: new FormControl('')})
      ])
    })
  }

  onSubmit():void {
    this.utilisateurList.push(this.utilisateur.value);
    console.table(this.utilisateurList)
  }

  retirerChat(index: number): void {
    let valeur = this.utilisateur.get('chats') as FormArray
    valeur.removeAt(index)
  }

  ajouterChat(): void {
    let valeur = this.utilisateur.get('chats') as FormArray;
    valeur.insert(this.utilisateur.controls.chats.value.length, new FormGroup({nom: new FormControl('')}))
  }
}
