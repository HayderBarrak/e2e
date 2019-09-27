import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {platformService} from "@app/core/services/Platforms/Platform.service";
import {PlatformModel} from "@app/core/services/Platforms/platform.model";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {HealthServiceService} from "@app/core/services/HealthPlatService/HealthService.service";
import {NotificationService} from "@app/core/services";

@Component({
  selector: 'row-detail-demo',
  templateUrl: './row-detail.component.html',
    styleUrls: ['./row-detail-ngx-datatable.css']

})
export class RowDetailComponent implements OnInit {
   // rowes = [];
    selected = [];
    temp = [];
  @ViewChild('myTable') table: any;
  platform: PlatformModel;
  rows: PlatformModel[] = [];
    isSaving: boolean;
  timeout: any;
    n:number = 1;
  row: string;
    search = "";
    page: string;
    pagesizelist: number[] = [10, 20, 30];
    itemsPerPage = 10;
    countexpanded = 0;
    public loading = false;

    controls: any = {
        pageSize:  10,
        filter: '',

    }
 constructor(private formBuilder: FormBuilder,
             private platService: platformService,
             private router: Router,
             private toastr: ToastrService,
             private healthservice: HealthServiceService,
             private notificationService: NotificationService
  ) {

  }

  ngOnInit() {
      this.isSaving = false;

      this.selected = [];
      this.platform = new PlatformModel();
      this.loadplatforms();
  }

    loadplatforms() {

        this.loading = true;
        setTimeout(() => {
            this.platService.queryPlatforms({
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

    testHealth(row, url) {
        row.loadingSpinner = true;

        setTimeout(() => {
            row.loadingSpinner = false;

            this.healthservice.checkhealth(url).subscribe(data => {

                    this.toastr.success("Plateforme disponible ! ");

                    console.log(this.row);
                },
                err => {
                    this.toastr.error("Plateforme indisponible !");
                }
            )


        }, 2000);


    }



  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }



    toggleExpandRow(row) {
        this.platform = new PlatformModel();
        this.platform=row;
        row.$$expanded=!row.$$expanded;
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }


    toggleExpandNewRow() {
        this.platform = new PlatformModel();

        this.table.rowDetail.toggleExpandRow(this.platform);
    }



  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

    updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.rows.filter(function(d) {
            return !val || ['nom', 'adresse', 'login'].some((field: any)=>{
                return d[field].toLowerCase().indexOf(val) !== -1
            })
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
        setTimeout(() => {
            this.loadplatforms();
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
            this.platService.delete(i.id).subscribe(value => {
                console.log('deleted');
                setTimeout(() => {
                    this.loadplatforms();
                }, 1000);

            })
        this.rows.splice(this.rows.indexOf(i),1);
        }
        this.toastr.success("Plateforme supprimée avec succès !");

    }


    add(){
       const row = new PlatformModel();
       row.$$expanded = false ;
        this.rows = [...this.rows, row];
        this. toggleExpandRow(row);
        setTimeout(() => {
            this.toggleExpandRow(row);
            setTimeout(() => {
                this.scrollToBottom();
            },25);
        },100);
    }


    refresh() {
        this.loadplatforms();
    }

    scrollToBottom(x=0): void {
        let b=500;
        try {
            //this.table.element.scrollTop = this.table.element.scrollHeight;
            if ($(".datatable-body")[0].scrollTop < $(".datatable-body")[0].scrollHeight -b){
                $(".datatable-body")[0].scrollTop = $(".datatable-body")[0].scrollTop + this.n;
                // this.n = this.n * 0.1;
                this.scrollToBottom();

                // $('html, body').animate({
                //   scrollTop: $(".datatable-body")[0].offset().top
                // }, 2000);
            }
        } catch(err) { }
    }


    save(){
        console.log("works")
        this.isSaving = true;
        if(this.platform.id === null){
            this.platService.create(this.platform).subscribe(
                (response) => {
                    console.log(response);
                    this.toastr.success("Plateforme ajoutée avec succées !");
                    setTimeout(() => {
                        this.loadplatforms();
                    }, 1500);
                    this.router.navigate(['/tables/ngx-datatable'])
                },

                (error) => {
                    console.log(error);
                    this.toastr.error("Une erreur est survenue !");
                    setTimeout(() => {
                        this.loadplatforms();
                    }, 1500);
                }
            );

        } else {
            this.platService.update(this.platform).subscribe(
                (response) => {
                    console.log(response);
                    this.toastr.success("Plateforme modifiée avec succées !");
                    setTimeout(() => {
                        this.loadplatforms();
                    }, 1500);
                    this.router.navigate(['/tables/ngx-datatable'])
                },
                (error) => {
                    console.log(error);
                    this.toastr.error("Une erreur est survenue !");
                    setTimeout(() => {
                        this.loadplatforms();
                    }, 1500);
                }
            );
        }

    }


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
            nom: {
                validators: {
                    notEmpty: {
                        message: 'Nom de la plateforme est obligatoire'
                    },
                }
            },
            adr: {
                validators: {
                    notEmpty: {
                        message: 'Adresse de la plateforme est obligatoire'
                    },
                }
            },
            login: {
                validators: {
                    notEmpty: {
                        message: 'Login de la plateforme est obligatoire'
                    }
                }
            },
            pwd: {
                validators: {
                    notEmpty: {
                        message: 'Mot de passe de la plateforme est obligatoire'
                    }
                }
            }
        }
    };


}
