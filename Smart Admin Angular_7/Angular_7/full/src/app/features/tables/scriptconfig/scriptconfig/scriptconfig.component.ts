import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ScriptModel} from "@app/core/services/scripts/script.model";
import {scriptService} from "@app/core/services/scripts/script.service";
import {platformService} from "@app/core/services/Platforms/Platform.service";
import {MachineModel} from "@app/core/services/Machines/Machine.model";
import {MachineService} from "@app/core/services/Machines/Machine.service";
import {PlatformModel} from "@app/core/services/Platforms/platform.model";
import {CmpService} from "@app/core/services/Campagnes/cmp.service";
import {CmpModel} from "@app/core/services/Campagnes/cmp.model";
import {UserSer} from "@app/core/services/Users/User.service";
import {UserModel} from "@app/core/services/Users/User.model";
import {ScenarioService} from "@app/core/services/Scenarios/scenario.service";
import {ScenarioModel} from "@app/core/services/Scenarios/scenario.model";
import {ParseService} from "@app/core/services/Parsing/parse.service";
import {ToastrService} from "ngx-toastr";
import {TestService} from "@app/core/services/ProtractorTest/Test.service";
import {Router} from "@angular/router";
import {NotificationService} from "@app/core/services";
import {LogsModel} from "@app/core/services/ProtractorTest/Logs.model";

@Component({
    selector: 'sa-scriptconfig',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './scriptconfig.component.html',
    styleUrls: ['./scriptconfig.component.css']
})
export class ScriptconfigComponent implements OnInit {
    @ViewChild('myTable') table: any;
    @ViewChild('myTabledetails') table2: any;
    timeout: any;
    search = "";
    page: string;
    temp = [];
    pagesizelist: number[] = [10, 20, 30];
    itemsPerPage = 10;
    script: ScriptModel[] = [];
    machine: MachineModel[] = [];
    platform: PlatformModel[] = [];
    req: any;
    platformselected: any;
    scriptSelected: any [];
    machineSelected: [];
    cmpselected: any;
    agentselected: any;
    text: string;
    cmp: CmpModel[] = [];
    Users: UserModel[] = [];
    show: boolean = false;
    logs: LogsModel[];
    selected: any [];
    public loading = false;
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
    controls: any = {
        pageSize: 20,
        filter: '',
    }


    scenario: ScenarioModel;
    rows: ScenarioModel[] = [];
    row: string;

    constructor(private scService: scriptService,
                private machService: MachineService,
                private platService: platformService,
                private Servicecmp: CmpService,
                private ServiceUser: UserSer,
                private servicescenario: ScenarioService,
                private parseService: ParseService,
                private toastr: ToastrService,
                private lancertest: TestService,
                private router: Router,
                private notificationService: NotificationService
    ) {
    }


    loadallScenario() {
        this.loading = true;
        setTimeout(() => {
            this.servicescenario.queryScenario({
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
        // this.lancertest.getLogs().subscribe(data=> {
        //     console.log(data);
        //     this.logs = data;
        // })

        this.scenario = new ScenarioModel();
        this.scenario.plateforme = new PlatformModel();
        this.scenario.machine = new MachineModel();
        this.scenario.script = new ScriptModel();

        this.scService.queryScripts({
            page: 0,
            size: this.itemsPerPage,
            // sort: this.sort(),
            search: this.search
        }).subscribe(
            data => {
                this.script = data;
            })

        this.machService.queryMachines(this.req).subscribe(
            data => {
                this.machine = data;
            })


        this.platService.queryPlatforms(this.req).subscribe(
            platform => {
                this.platform = platform;

            }
        )

        this.platformselected = [];
        this.cmpselected = [];
        this.scriptSelected = [];
        this.machineSelected = [];
        this.selected = [];

        this.agentselected = [];

        this.loadallScenario();


    }


    refresh() {
        this.loadallScenario();
    }

    onselected(id: any) {
        this.Servicecmp.getcamp(id).subscribe(
            data => {
                this.cmp = data;
                console.log(data);

            })


    }


    onSel(idP: number, idU: number[]) {
        this.ServiceUser.getusers(idP, idU[idU.length - 1]).subscribe(
            data => {
                this.Users = [...this.Users, ...data];
                console.log(this.Users);
            });
    }


    Scselect(id: number) {
        this.scService.queryScripts({
                id
            }
        ).subscribe(
            data => {
                this.script = data;
            })
    }

    MaSelect(id: number) {
        this.machService.queryMachines({
                id
            }
        ).subscribe(
            data => {
                this.machine = data;
            })
    }

    AgSelect() {
        console.log(this.agentselected);

    }





    onSelect({selected}) {
        console.log('Select Event', selected, this.selected);

        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }


    @Input() cssClasses: any = {
        sortAscending: 'fa fa-sort-up',
        sortDescending: 'fa fa-sort-down',
        pagerLeftArrow: 'fa  fa-angle-left',
        pagerRightArrow: 'fa fa-angle-right',
        pagerPrevious: 'fa fa-angle-double-left',
        pagerNext: 'fa fa-angle-double-right'
    };

    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }



    toggleExpandRow(row) {
        this.scenario = new ScenarioModel();
        this.scenario = row;
        row.$$expanded = !row.$$expanded;
        console.log('Toggled Expand Row!', row);
        this.table.rowDetail.toggleExpandRow(row);
    }

    toggleExpandNewRow() {
        this.scenario = new ScenarioModel();

        this.table.rowDetail.toggleExpandRow(this.scenario);


    }


    updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(function (d) {
            return !val || ['nom', 'description'].some((field: any) => {
                return d[field].toLowerCase().indexOf(val) !== -1
            })
        });

        // update the rows
        this.rows = this.temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
        setTimeout(() => {
            this.loadallScenario();
        }, 7000);
    }


    onPage(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log('paged!', event);
        }, 100);
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
                this.servicescenario.delete(i.id).subscribe(value => {
                    console.log('deleted');
                    setTimeout(() => {
                        this.loadallScenario();
                    }, 1000);

                })

                this.rows.splice(this.rows.indexOf(i),1);

            }
            this.toastr.success("Scénario supprimé avec succès !");

        }


    getScenarios() {
        this.servicescenario.queryScenario({
            page: 0,
            size: this.itemsPerPage,
            // sort: this.sort(),
            search: this.search
        }).subscribe(data => {
            this.rows = data;
        })

    }


    Parse(idP: number, idM: any, idSc: any, idSce: any, login: any) {
        console.log("ok");
        this.servicescenario.create(this.scenario)
            .subscribe(
                (response) => {
                    console.log(response);
                    console.log(response.body.id);
                    this.scenario = response.body;
                    this.toastr.success("Scénario créé avec succès !");
                    setTimeout(() => {
                        this.loadallScenario();
                    }, 1500);
                    this.router.navigate(['/tables/scriptconfig'])
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);


                    this.parseService.Parsefile(idP, idM, idSc, this.scenario.id, login).subscribe(
                        data => {
                            console.log(data);
                            console.log(this.agentselected);

                            console.log("done");
                            console.log(idSc);
                        }
                    )
                },
                (error) => {
                    console.log(error);
                    this.toastr.error("Une erreur est survenue !");
                    setTimeout(() => {
                        this.loadallScenario();
                    }, 1500);
                    this.router.navigate(['/tables/scriptconfig'])
                }
            );
    }

    lancement(idsce: any) {
        this.lancertest.lancerfile(idsce).subscribe(data => {
            console.log(data);
            console.log(idsce);
        })
    }

    reset(): void {
        window.location.reload();
    }


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
                        message: 'Nom du scénario est obligatoire'
                    },
                }
            },
            description: {
                validators: {
                    notEmpty: {
                        message: 'Description du scénario est obligatoire'
                    },
                }
            },
        }
    };



}
