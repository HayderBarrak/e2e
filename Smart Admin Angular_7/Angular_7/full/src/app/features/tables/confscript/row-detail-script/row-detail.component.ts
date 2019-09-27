import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {ScriptModel} from "@app/core/services/scripts/script.model";
import {scriptService} from "@app/core/services/scripts/script.service";
import {ToastrService} from "ngx-toastr";
import {NotificationService} from "@app/core/services";

@Component({
  selector: 'row-detail-demo',
    encapsulation: ViewEncapsulation.None,
  templateUrl: './row-detail.component.html',
    styleUrls: ['./row-detail-ngx-datatable.css']

})
export class RowDetailComponent implements OnInit {
   rows = [];
    selected = [];
    temp = [];
  @ViewChild('myTable') table: any;
  script: ScriptModel;

    isSaving: boolean;
  timeout: any;
  page: string;
  row: string;
    search = "";
    pagesizelist: number[] = [10, 20, 30];
    itemsPerPage = 10;
    public loading = false;


    controls: any = {
        pageSize:  10,
        filter: '',

    }
 constructor(private formBuilder: FormBuilder,
             private scService: scriptService,
             private router: Router,
             private toastr: ToastrService,
             private notificationService: NotificationService
  ) {

  }

    loadscript() {
        this.loading = true;
        setTimeout(() => {
            this.scService.queryScripts({
                page: 0,
                size: this.itemsPerPage,
                // sort: this.sort(),
                search: this.search
            }).subscribe(data => {
                this.rows = data;
                this.loading = false;
            })
        }, 2000);

    }

  ngOnInit() {
      this.isSaving = false;

      this.selected = [];
      this.script = new ScriptModel();
      this.loadscript();

  }


    refresh() {
        this.loadscript();
    }


  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }



    toggleExpandRow(row) {
        this.script = new ScriptModel();
        this.script=row;
        row.$$expanded=!row.$$expanded;
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);


        setTimeout(() => {
            $('.note-editable')[0].innerText = atob(row.contenu);
        }, 100);
    }



    toggleExpandNewRow() {
        this.script = new ScriptModel();

        this.table.rowDetail.toggleExpandRow(this.script);
    }



  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

    updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.rows.filter(function(d) {
            return !val || ['nom_script', 'nom_fichier'].some((field: any)=>{
                return d[field].toLowerCase().indexOf(val) !== -1
            })
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
        setTimeout(() => {
            this.loadscript();
        }, 7000);
    }


    @Input()  public options = {
        mode: 'inline',
        disabled: false,
        inline: true
    };

    onChange(){
        this.options.mode = this.options.inline ? 'inline' : 'popup'
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

    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);

        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }

    updatePageSize(value) {

        if(!this.controls.filter){
            // update the rows
            this.rows = [...this.temp];
            // Whenever the filter changes, always go back to the first page
            this.table.offset = 0;
        }

        this.controls.pageSize = parseInt(value)

        this.table.limit = this.controls.pageSize;

        window.dispatchEvent(new Event('resize'));

    }


    showPopup() {
        this.notificationService.smartMessageBox(
            {
                title:
                    "<i class='fa fa-trash txt-color-red'></i><strong> Êtes-vous sur de vouloir supprimer cet element ? </strong>"
                ,
                buttons: "[Non][Oui]"
            },
            ButtonPressed => {
                if (ButtonPressed == "Oui") {
                    this.Delete();
                }
            }
        );
    }

        Delete(){
            for (let i of this.selected){
                this.scService.delete(i.id, i.nom_fichier).subscribe(value => {
                    console.log('deleted');
                    setTimeout(() => {
                        this.loadscript();
                    }, 1000);

                })

                this.rows.splice(this.rows.indexOf(i),1);

            }
            this.toastr.success("Fichié supprimé avec succès");

    }


    add(){
       const row = new ScriptModel();
       row.$$expanded = false ;
        this.rows = [...this.rows, row];
        this. toggleExpandRow(row);
    }


    update(){
        console.log("works")
        this.isSaving = true;
        this.script.contenu = btoa($('.note-editable')[0].innerText);
        this.scService.update(this.script) .subscribe(
            (response)=> {
                console.log(response);
                setTimeout(() => {
                    this.loadscript();
                }, 2000);
                this.router.navigate(['/tables/confscript'])
                this.toastr.success("Script modifié avec succès!");
                //window.location.reload();

            },
            (error)=> {
                console.log(error);

            }

        );

    }


    // updatesc(){
    //     this.isSaving = true;
    //     this.script.contenu = btoa($('.note-editable')[0].innerText);
    //     this.scService.updatesc(this.script) .subscribe(
    //         (response)=> {
    //             console.log(response);
    //             this.router.navigate(['/tables/confscript'])
    //             this.toastr.success("Script modifié avec succès!");
    //             setTimeout(() => {
    //                 this.loadscript();
    //             }, 2000);
    //         },
    //         (error)=> {
    //             console.log(error);
    //
    //         }
    //
    //     );
    //
    // }

    @Input() cssClasses: any = {
        sortAscending: 'fa fa-sort-up',
        sortDescending: 'fa fa-sort-down',
        pagerLeftArrow: 'fa  fa-angle-left',
        pagerRightArrow: 'fa fa-angle-right',
        pagerPrevious: 'fa fa-angle-double-left',
        pagerNext: 'fa fa-angle-double-right'
    };

    validatorOptions = {
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            adresse: {
                group: '.col-md-4',
                validators: {
                    notEmpty: {
                        message: 'Adresse machine obligatoire'
                    },
                    stringLength: {
                        max: 80,
                        message: 'Adresse doit être inférieure à 80 caractére'
                    }
                }
            },
            name: {
                group: '.col-md-4',
                validators: {
                    notEmpty: {
                        message: 'Nom plateforme obligatoire'
                    },
                    stringLength: {
                        max: 80,
                        message: 'Nom plateforme doit être inférieure à 80 caractére'
                    }
                }
            },
            login: {
                group: '.col-md-6',
                validators: {
                    notEmpty: {
                        message: 'Nom script obligatoire'
                    },
                }
            },
            pwd: {
                group: '.col-md-6',
                validators: {
                    notEmpty: {
                        message: 'Description obligatoire'
                    },
                }
            },
        }
    };


}
