import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {NotificationService} from "@app/core/services/notification.service";
import {AuthService} from "@app/core/services";

@Component({
  selector: "sa-logout",
  template: `
<div id="logout" (click)="showPopup()" class="btn-header transparent pull-right">
        <span> <a title="Sign Out"><i class="fa fa-sign-out"></i></a> </span>
    </div>
  `,
  styles: []
})
export class LogoutComponent implements OnInit {
  connectedUser = JSON.parse(localStorage.getItem('currentUser')).username;

  public user

  constructor(
    private authentiSer: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {
  }

  logout(){

    this.authentiSer.logout();
    this.router.navigate(["/auth/login"])
  }

  showPopup() {
    this.notificationService.smartMessageBox(
      {
        title:
            "<i class='fa fa-sign-out txt-color-orangeDark'></i> Déconnexion <span class='txt-color-orangeDark'></span> ?",
        content:
            "Déconnecter maintenant?",
          buttons: "[Non][Oui]"
      },
      ButtonPressed => {
          if (ButtonPressed == "Oui") {
          this.logout();
        }
      }
    );
  }


  ngOnInit() {}
}
