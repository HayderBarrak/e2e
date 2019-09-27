import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {PlatformModel} from "@app/core/services/Platforms/platform.model";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {MachineService} from "@app/core/services/Machines/Machine.service";
import {MachineModel} from "@app/core/services/Machines/Machine.model";
import {ToastrService} from "ngx-toastr";
import {NotificationService} from "@app/core/services";


@Component({
  selector: 'sa-machineconfig',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './machineconfig.component.html',
  styleUrls: ['./machineconfig.component.css']
})
export class MachineconfigComponent implements OnInit {

  selected = [];
  temp = [];
  @ViewChild('myTable') table: any;
  @ViewChild('myTabledetails') table2: any;
  platform: MachineModel;
  rows: MachineModel[] = [];


  isSaving: boolean;
  timeout: any;
  row: string;
  n:number = 1;
    search = "";
    page: string;
    pagesizelist: number[] = [10, 20, 30];
    itemsPerPage = 10;
    public loading = false;
  controls: any = {
    pageSize:  10,
    filter: '',
  }


  public state: any = {
    tabs: {
      demo1: 0,
      demo2: 'tab-r1',
      demo3: 'hr1',
      demo4: 'AA',
      demo5: 'iss1',
      demo6: 'l1',
      demo7: 'tab1',
      demo8: 'hb1',
      demo9: 'A1',
      demo10: 'is1'
    }
  }
  constructor(private formBuilder: FormBuilder,
              private machineService: MachineService,
              private router: Router,
              private toastr: ToastrService,
              private notificationService: NotificationService,
  ) {

  }

    loadall() {
        this.loading = true;
        setTimeout(() => {
            this.machineService.queryMachines({
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
    this.platform = new PlatformModel();
      this.loadall();

  }






  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }



  toggleExpandRow(row) {
    this.platform = new MachineModel();
    this.platform=row;
    row.$$expanded=!row.$$expanded;
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  toggleExpandNewRow() {
    this.platform = new MachineModel();

    this.table.rowDetail.toggleExpandRow(this.platform);
  }



  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }


  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
      const temp = this.temp.filter(function (d) {
          return !val || ['machinename', 'adresse'].some((field: any) => {
        return d[field].toLowerCase().indexOf(val) !== -1
      })
    });

    // update the rows
      this.rows = this.temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
      setTimeout(() => {
          this.loadall();
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
                    this.Deleteitems();
                }
            }
        );
    }


    Deleteitems() {

        for (let i of this.selected){
            this.machineService.delete(i.id).subscribe(
                (response) => {
                    console.log(response);
                    setTimeout(() => {
                        this.loadall();
                    }, 1500);
                });
        }
        this.toastr.success("Machine supprimée avec succés");
    }


    add(){
    const row = new MachineModel();
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
        this.loadall();
    }

  save(){
    console.log("works")
    this.isSaving = true;
      if (this.platform.id === null) {
        this.machineService.create(this.platform).subscribe(
            (response) => {
                console.log(response);
                this.toastr.success("Machine ajoutée avec succés !");
                setTimeout(() => {
                    this.loadall();
                }, 1500);
                this.router.navigate(['/tables/machineconfig'])
            },
            (error) => {
                console.log(error);
                this.toastr.error("Une erreur est survenue !");
                setTimeout(() => {
                    this.loadall();
                }, 1500);
                this.router.navigate(['/tables/machineconfig'])
            }
        );
    }
    else {
        this.machineService.update(this.platform).subscribe(
            (response) => {
                console.log(response);
                this.toastr.success("Machine modifiée avec succés !");
                setTimeout(() => {
                    this.loadall();
                }, 1500);
                this.router.navigate(['/tables/machineconfig'])
            },
            (error) => {
                console.log(error);
                this.toastr.error("Une erreur est survenue !");
                setTimeout(() => {
                    this.loadall();
                }, 1500);
                this.router.navigate(['/tables/machineconfig'])
            }
        );
    }
      this.router.navigate(['/tables/machineconfig'])
  }

  @Input() cssClasses: any = {
    sortAscending: 'fa fa-sort-up',
    sortDescending: 'fa fa-sort-down',
    pagerLeftArrow: 'fa  fa-angle-left',
    pagerRightArrow: 'fa fa-angle-right',
    pagerPrevious: 'fa fa-angle-double-left',
    pagerNext: 'fa fa-angle-double-right'
  };


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
            nom: {
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
                        message: 'Adresse machine obligatoire'
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
