export default {
    template: `
      <div>
      <form v-if="!isEdit">

      <label>Moment</label>

          <select style="width: 300px;" v-model="coord.tranche_id" >
          <option  value=""></option>

          <option v-for="(tranche, index) in tranches" :key=tranche.id :value=tranche.id>{{tranche.type_tranche}}</option>
        

  </select> <br />

      <label>catégorie</label>

      <select style="width: 50px;" v-model="coord.categorie" >
        <option  value="2">2</option>
        <option  value="3">3</option>
        <option  value="4">4</option>
        <option  value="5">5</option>
        <option  value="6">6</option>
        <option  value="7">7</option>

  </select>
      <label>taux horraire</label>
      <input style="width: 50px;" type="text" name="taux_horraire"  v-model="coord.taux_horraire"
          />

      <label>100</label>
      <input style="width: 50px;" type="text" name="montant_heure_100"  v-model="coord.montant_heure_100"
         />

      <label>115</label>
      <input style="width: 50px;" type="text" name="montant_heure_115"  v-model="coord.montant_heure_115"
          />

          <label>150</label>
      <input style="width: 50px;" readonly type="text" name="montant_heure_150"  v-model="coord.montant_heure_150"
         />

      <label>175</label>
      <input style="width: 50px;" type="text" name="montant_heure_175"  v-model="coord.montant_heure_175"
          />
          <label>200</label>
      <input style="width: 50px;" type="text" name="montant_heure_200" v-model="coord.montant_heure_200"
          />
         

          <label>Total heures</label>
      <input style="width: 50px;" type="text" name="total_montant_heure"  v-model="coord.total_montant_heure"
          />
          <label>Avantage acquis</label>
      <input style="width: 50px;" type="text" name="avantage_acquis"  v-model="coord.avantage_acquis"
          />
          <label>Prime récarité</label>
      <input style="width: 50px;" type="text" name="prime_precarite"  v-model="coord.prime_precarite"
          />
          <label>Panier salissure</label>
      <input style="width: 50px;" readonly type="text" name="panier_salissure_mouille"  v-model="coord.panier_salissure_mouille"
          />
          <label>Indemnité transport</label>
      <input style="width: 50px;" readonly type="text" name="indemnite_transport"  v-model="coord.indemnite_transport"
          />
          <label>Brut imposable</label>
      <input style="width: 50px;" type="text" name="brut_imposable" v-model="coord.brut_imposable"
          />
        
          <label>Brut total</label>
      <input style="width: 50px;" type="text" name="brut_total"  v-model="coord.brut_total"
          />
          <label>Provision congés</label>
      <input style="width: 50px;" type="text" name="provis_conge_gratis"  v-model="coord.provis_conge_gratis"
          />
          <label>Frais bureau</label>
      <input style="width: 50px;" type="text" name="frais_bureau" v-model="coord.frais_bureau"
          />
          <label>Frais centre médical</label>
      <input style="width: 50px;" type="text" name="frais_centre_medical" v-model="coord.frais_centre_medical"
         />
          <label>Tva frais fonctionnement</label>
      <input style="width: 50px;" type="text" name="tva_frais_fonctionnement"  v-model="coord.tva_frais_fonctionnement"
          />
          <label>Prestations familiales</label>
      <input style="width: 50px;" readonly type="text" name="prestation_familliales" v-model="coord.prestation_familliales"
          />
          <label>Accident du travail</label>
      <input style="width: 50px;" readonly type="text" name="accident_travail" v-model="coord.accident_travail"
          />
          <label>C R T C I</label>
      <input style="width: 50px;" type="text" name="c_r_t_c_i" v-model="coord.c_r_t_c_i"
          />
          <label>impot/sal</label>
      <input style="width: 50px;" type="text" name="impot_sal" v-model="coord.impot_sal"
          />
          <label>Taxe fpc</label>
      <input style="width: 50px;" type="text" name="taxe_fpc" v-model="coord.taxe_fpc"
          />
          <label>Taxe d'apprent</label>
      <input style="width: 50px;" type="text" name="taxe_apprenti" v-model="coord.taxe_apprenti"
         />
         
          <label>Cout total</label>
      <input style="width: 50px;" type="text" name="total_cout" v-model="coord.total_cout"
          />

      <input type="submit" @click="handleFormSubmit" value="Ajouter" />
  </form>

  <form v-else>
  <label>Moment</label>

  <select style="width: 300px;" name="Etranche_id" v-model="editCoord.tranche_id" >
  <option  value=""></option>

  <option v-for="(tranche, index) in tranches" :key=tranche.id :value=tranche.id>{{tranche.type_tranche}}</option>


</select> <br />

<label>catégorie</label>

<select style="width: 50px;" name="Ecategorie" v-model="editCoord.categorie" >
<option  value="2">2</option>
<option  value="3">3</option>
<option  value="4">4</option>
<option  value="5">5</option>
<option  value="6">6</option>
<option  value="7">7</option>

</select>

  <label>taux horraire</label>
  <input style="width: 50px;" type="text" name="Etaux_horraire"  v-model="editCoord.taux_horraire"
      />

  <label>100</label>
  <input style="width: 50px;" type="text" name="Emontant_heure_100"  v-model="editCoord.montant_heure_100"
     />

  <label>115</label>
  <input style="width: 50px;" type="text" name="Emontant_heure_115"  v-model="editCoord.montant_heure_115"
      />

      <label>150</label>
  <input style="width: 50px;" readonly type="text" name="Emontant_heure_150" v-model="editCoord.montant_heure_150"
     />

  <label>175</label>
  <input style="width: 50px;" type="text" name="Emontant_heure_175" v-model="editCoord.montant_heure_175"
      />
      <label>200</label>
  <input style="width: 50px;" type="text" name="Emontant_heure_200" v-model="editCoord.montant_heure_200"
      />
     

      <label>Total heures</label>
  <input style="width: 50px;" type="text" name="Etotal_montant_heure" v-model="editCoord.total_montant_heure"
      />
      <label>Avantage acquis</label>
  <input style="width: 50px;" type="text" name="Eavantage_acquis"  v-model="editCoord.avantage_acquis"
      />
      <label>Prime récarité</label>
  <input style="width: 50px;" type="text" name="Eprime_precarite" v-model="editCoord.prime_precarite"
      />
      <label>Panier salissure</label>
  <input style="width: 50px;" readonly type="text" name="Epanier_salissure_mouille"  v-model="editCoord.panier_salissure_mouille"
      />
      <label>Indemnité transport</label>
  <input style="width: 50px;" readonly type="text" name="Eindemnite_transport"  v-model="editCoord.indemnite_transport"
      />
      <label>Brut imposable</label>
  <input style="width: 50px;" type="text" name="Ebrut_imposable"  v-model="editCoord.brut_imposable"
      />
      <label>Brut total</label>
  <input style="width: 50px;" type="text" name="Ebrut_total"  v-model="editCoord.brut_total"
      />
      <label>Provision congés</label>
  <input style="width: 50px;" type="text" name="Eprovis_conge_gratis"  v-model="editCoord.provis_conge_gratis"
      />
      <label>Frais bureau</label>
  <input style="width: 50px;" type="text" name="Efrais_bureau"  v-model="editCoord.frais_bureau"
      />
      <label>Frais centre médical</label>
  <input style="width: 50px;" type="text" name="Efrais_centre_medical" v-model="editCoord.frais_centre_medical"
     />
      <label>Tva frais fonctionnement</label>
  <input style="width: 50px;" type="text" name="Etva_frais_fonctionnement" v-model="editCoord.tva_frais_fonctionnement"
      />
      <label>Prestations familiales</label>
  <input style="width: 50px;" readonly type="text" name="Eprestation_familliales"  v-model="editCoord.prestation_familliales"
      />
      <label>Accident du travail</label>
  <input style="width: 50px;" readonly type="text" name="Eaccident_travail" v-model="editCoord.accident_travail"
      />
      <label>C R T C I</label>
  <input style="width: 50px;" type="text" name="Ec_r_t_c_i" v-model="editCoord.c_r_t_c_i"
      />
      <label>impot/sal</label>
  <input style="width: 50px;" type="text" name="Eimpot_sal" v-model="editCoord.impot_sal"
      />
      <label>Taxe fpc</label>
  <input style="width: 50px;" type="text" name="Etaxe_fpc" v-model="editCoord.taxe_fpc"
      />
      <label>Taxe d'apprent</label>
  <input style="width: 50px;" type="text" name="Etaxe_apprenti" v-model="editCoord.taxe_apprenti"
     />
     
      <label>Cout total</label>
  <input style="width: 50px;" type="text" name="Etotal_cout" v-model="editCoord.total_cout"
      />

  <input type="submit" @click.prevent="handleFormModif(editCoord.id)" value="Modifier" />
  <input type="submit" @click.prevent="cancelEdit" value="Annuler" />

</form>

  <br/> <br/>

  <label>Tranches</label>

  <select v-model=tranche >
  <option  value=""></option>

  <option v-for="(tranche, index) in tranches" :key=tranche.id :value=tranche.id>{{tranche.type_tranche}}</option>



</select>


<input v-if="tranche !== '' " type="submit" @click="getInfosRecherche" value="Rechercher" />
   


<input v-if="coords.length < 30" type="submit" @click="getInfosR" value="Afficher la liste complète" />


<br /> <br />
      <table border='1' width='100%' >
      <tr>
          <th>cat</th>
          <th>Taux horaire</th>
          <th>100</th>
          <th>115</th>
          <th>150</th> 
          <th>175</th>  
          <th>200</th>     
 
          <th>Total heure</th>     
          <th>Avtage Acquis</th>     
          <th>Prime précarité</th>     
          <th>Panier salissure</th>  
          <th>indeminités transport</th>     
          <th>Brut imposable</th>     
          <th>Brut total</th>     
          <th>Provis cngés</th>     
          <th>FF Bureau</th>     
          <th>BT centre medi</th>     
          <th>TVA frais fctmt</th>     
          <th>Prest famil</th>     
          <th>accdt tvail</th>     
          <th>C.R.T.C.I</th>  
          <th>impot/sal</th>     
          <th>taxe FPC</th>     
          <th>taxe apprent</th>     
          <th>Coût total</th>     

 
  
      </tr>

      
      <tr v-for="(coord, index) in coords" :key=coord.id @dblclick="modif(index)" >

          <td>{{ coord.categorie }}</td>
          <td>{{ coord.taux_horraire }}</td>
          <td>{{ coord.montant_heure_100 }}</td>
          <td>{{ coord.montant_heure_115 }}</td>

          <td>{{ coord.montant_heure_150 }}</td>
          <td>{{ coord.montant_heure_175 }}</td>
          <td>{{ coord.montant_heure_200 }}</td>
          <td>{{ coord.total_montant_heure }}</td>
          <td>{{ coord.avantage_acquis }}</td>
          <td>{{ coord.prime_precarite }}</td>
          <td>{{ coord.panier_salissure_mouille }}</td>
          <td>{{ coord.indemnite_transport }}</td>
          <td>{{ coord.brut_imposable }}</td>
          <td>{{ coord.brut_total }}</td>
          <td>{{ coord.provis_conge_gratis }}</td>
          <td>{{ coord.frais_bureau }}</td>
          <td>{{ coord.frais_centre_medical }}</td>
          <td>{{ coord.tva_frais_fonctionnement }}</td>
          <td>{{ coord.prestation_familliales }}</td>
          <td>{{ coord.accident_travail }}</td>
          <td>{{ coord.c_r_t_c_i }}</td>
          <td>{{ coord.impot_sal }}</td>
          <td>{{ coord.taxe_fpc }}</td>
          <td>{{ coord.taxe_apprenti }}</td>
          <td>{{ coord.total_cout }}</td>

      </tr>
      
      </table>
      </div>
    `,
    data() {
      return {
      //  message: 'Oh hai from the component'
      coords: [],
      tranches: [],
      categorie: '',
      tranche: '',
      coord: {
        categorie: '',
        taux_horraire: '',
        montant_heure_100: '',
        montant_heure_115: '',
        montant_heure_175: '',
        montant_heure_200: '',
        montant_heure_150: 0,
        avantage_acquis: '',
        prime_precarite: '',
        panier_salissure_mouille: 1038,
        indemnite_transport: 1100,
        brut_imposable: '',
        tranche_id: '',
        brut_total: '',
        provis_conge_gratis: '',
        frais_bureau: '',
        frais_centre_medical: '',
        tva_frais_fonctionnement: '',
        prestation_familliales: 186,
        accident_travail: 129,
        c_r_t_c_i: '',
        impot_sal: '',
        taxe_fpc: '',
        taxe_apprenti: '',
        total_montant_heure: '',
        total_cout: ''
      },
      editCoord: {},
      isEdit: false,

      }

    },

    created(){
       // console.log('coucou')
       this.getInfos()

    },
    methods: {

        modif(index) {
            this.isEdit = true
            this.editCoord = this.coords[index]
        },

        cancelEdit(){
            this.isEdit = false
        },
        
  
  handleFormSubmit(e) { 
      e.preventDefault()   
    let formData = new FormData();
    formData.append('categorie', this.coord.categorie)
    formData.append('taux_horraire', this.coord.taux_horraire)
    formData.append('montant_heure_100', this.coord.montant_heure_100)
    formData.append('montant_heure_115', this.coord.montant_heure_115)
    formData.append('montant_heure_175', this.coord.montant_heure_175)
    formData.append('montant_heure_200', this.coord.montant_heure_200)
    formData.append('montant_heure_150', this.coord.montant_heure_150)
    formData.append('avantage_acquis', this.coord.avantage_acquis)
    formData.append('prime_precarite', this.coord.prime_precarite)
    formData.append('panier_salissure_mouille', this.coord.panier_salissure_mouille)
    formData.append('indemnite_transport', this.coord.indemnite_transport)
    formData.append('brut_imposable', this.coord.brut_imposable)
    formData.append('tranche_id', this.coord.tranche_id)
    formData.append('brut_total', this.coord.brut_total)
    formData.append('provis_conge_gratis', this.coord.provis_conge_gratis)
    formData.append('frais_bureau', this.coord.frais_bureau)
    formData.append('frais_centre_medical', this.coord.frais_centre_medical)
    formData.append('tva_frais_fonctionnement', this.coord.tva_frais_fonctionnement)
    formData.append('prestation_familliales', this.coord.prestation_familliales)
    formData.append('accident_travail', this.coord.accident_travail)

    formData.append('c_r_t_c_i', this.coord.c_r_t_c_i)
    formData.append('impot_sal', this.coord.impot_sal)
    formData.append('taxe_fpc', this.coord.taxe_fpc)
    formData.append('taxe_apprenti', this.coord.taxe_apprenti)
    formData.append('total_montant_heure', this.coord.total_montant_heure)

    formData.append('total_cout', this.coord.total_cout)

    console.log(formData)
    axios({
        method: 'post',
        url: '/api/ajouter.php',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
  
    .then( (response) => {
       this.getInfos()
       this.coord = {
        categorie: '',
        taux_horraire: '',
        montant_heure_100: '',
        montant_heure_115: '',
        montant_heure_175: '',
        montant_heure_200: '',
        montant_heure_150: 0,
        avantage_acquis: '',
        prime_precarite: '',
        panier_salissure_mouille: 1038,
        indemnite_transport: 1100,
        brut_imposable: '',
        tranche_id: '',
        brut_total: '',
        provis_conge_gratis: '',
        frais_bureau: '',
        frais_centre_medical: '',
        tva_frais_fonctionnement: '',
        prestation_familliales: 186,
        accident_travail: 129,
        c_r_t_c_i: '',
        impot_sal: '',
        taxe_fpc: '',
        taxe_apprenti: '',
        total_montant_heure: '',
        total_cout: ''
      }
    })
    .catch(function (error) {
        //handle error
        console.log(error)
    });
},

handleFormModif(id) {  
  
    let formData = new FormData();
    formData.append('element_id', id)

    formData.append('Ecategorie', this.editCoord.categorie)
    formData.append('Etaux_horraire', this.editCoord.taux_horraire)
    formData.append('Emontant_heure_100', this.editCoord.montant_heure_100)
    formData.append('Emontant_heure_115', this.editCoord.montant_heure_115)
    formData.append('Emontant_heure_175', this.editCoord.montant_heure_175)
    formData.append('Emontant_heure_200', this.editCoord.montant_heure_200)
    formData.append('Emontant_heure_150', this.editCoord.montant_heure_150)
    formData.append('Eavantage_acquis', this.editCoord.avantage_acquis)
    formData.append('Eprime_precarite', this.editCoord.prime_precarite)
    formData.append('Epanier_salissure_mouille', this.editCoord.panier_salissure_mouille)
    formData.append('Eindemnite_transport', this.editCoord.indemnite_transport)
    formData.append('Ebrut_imposable', this.editCoord.brut_imposable)
    formData.append('Etranche_id', this.editCoord.tranche_id)
    formData.append('Ebrut_total', this.editCoord.brut_total)
    formData.append('Eprovis_conge_gratis', this.editCoord.provis_conge_gratis)
    formData.append('Efrais_bureau', this.editCoord.frais_bureau)
    formData.append('Efrais_centre_medical', this.editCoord.frais_centre_medical)
    formData.append('Etva_frais_fonctionnement', this.editCoord.tva_frais_fonctionnement)
    formData.append('Eprestation_familliales', this.editCoord.prestation_familliales)
    formData.append('Eaccident_travail', this.editCoord.accident_travail)

    formData.append('Ec_r_t_c_i', this.editCoord.c_r_t_c_i)
    formData.append('Eimpot_sal', this.editCoord.impot_sal)
    formData.append('Etaxe_fpc', this.editCoord.taxe_fpc)
    formData.append('Etaxe_apprenti', this.editCoord.taxe_apprenti)
    formData.append('Etotal_montant_heure', this.editCoord.total_montant_heure)

    formData.append('Etotal_cout', this.editCoord.total_cout)
    axios({
        method: 'post',
        url: '/api/modifier.php',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then( (response) => {
       this.getInfos()
       this.isEdit = false

    })
    .catch(function (error) {
        //handle error
        console.log(error)
    });
},


    getInfos() {

    const url = '/api/coords.php'
    axios.get(url).then(response => {
        this.coords = response.data.resultats.coords
        this.tranches = response.data.resultats.tranches

    }).catch(error => console.log(error))
    },

    getInfosR(event) {
        event.preventDefault();

    const url = '/api/coords.php'
    axios.get(url).then(response => {
       this.coords = response.data.resultats.coords

    }).catch(error => console.log(error))
    },

    getInfosRecherche(event) {
        event.preventDefault();
        let formData = new FormData();
        formData.append('tranche', Number(this.tranche))

        axios({
            method: 'post',
            url: '/api/coords.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
    .then(response => {
       this.coords = response.data.resultats.coords


       console.log( response.data.resultats)
    }).catch(error => console.log(error))
   
    }
    
  
    }

  }