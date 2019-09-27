import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {scriptService} from "@app/core/services/scripts/script.service";
import {Router} from "@angular/router";
import {ScriptModel} from "@app/core/services/scripts/script.model";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'sa-confscript',
  templateUrl: './confscript.component.html',
  styleUrls: ['./smartadmin-ngx-datatable.css']
})
export class ConfscriptComponent implements OnInit {



    addscriptForm: FormGroup;
    script: ScriptModel;
    rows: ScriptModel[] = [];
    file : File;
    isSaving: boolean;
    selectedFiles: FileList;
    currentFileUpload: File;
    row:string;
    selected = [];
    progress: { percentage: number } = { percentage: 0 }
    itemsPerPage = 10;
    public loading = false;

    constructor(private fb: FormBuilder, private scService: scriptService, private router: Router, private toastr: ToastrService) {



      { this.addscriptForm= fb.group({
          'nom_script' : [null, Validators.required],
          'description' : [null, Validators.required]

      });}

  }

  ngOnInit() {
      this.loadscript();
  }


    selectFile(event) {
        this.selectedFiles = event.target.files;
    }

    loadscript() {
        this.loading = true;
        setTimeout(() => {
            this.scService.queryScripts({
                page: 0,
                size: this.itemsPerPage,
                // sort: this.sort(),
            }).subscribe(data => {
                this.rows = data;
                this.loading = false;
            })
        }, 2000)
    }



    save() {

        this.currentFileUpload = this.selectedFiles.item(0);
        this.scService.upload(this.currentFileUpload,this.addscriptForm.value['nom_script'],this.addscriptForm.value['description'])
            .subscribe(
            (response)=> {
                console.log(response);
                this.toastr.success("Fichier téléchargé avec succès !");
                this.addscriptForm.reset();
                setTimeout(() => {
                    this.loadscript();
                }, 1500);
                window.location.reload();
                this.router.navigate(['/tables/confscript'])
            },
                (error)=> {
                console.log(error);
                    this.toastr.error("Fichier existe déjà !");
                    this.addscriptForm.reset();
                 }
            );
        this.selectedFiles = undefined;

    }





    private onSaveSuccess(result) {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    previousState() {
        window.history.back();
    }

    validatorOptions = {
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            adresse: {
                group: '.col-md-6',
                validators: {
                    notEmpty: {
                        message: 'Adresse plateforme obligatoire'
                    },
                    stringLength: {
                        max: 80,
                        message: 'Adresse doit être inférieure à 80 caractére'
                    }
                }
            },
            name: {
                group: '.col-md-6',
                validators: {
                    notEmpty: {
                        message: 'Login obligatoire'
                    },
                }
            },
            login: {
                group: '.col-md-6',
                validators: {
                    notEmpty: {
                        message: 'Login obligatoire'
                    },
                }
            },
            pwd: {
                group: '.col-md-6',
                validators: {
                    notEmpty: {
                        message: 'Password obligatoire'
                    },
                }
            },
        }
    };



}


