import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { UserIdleService } from 'angular-user-idle';
import { ROLE } from '../helper/role.helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public curp: string = '';
  public nombre: string = '';
  public apellidoPaterno: string = '';
  public apellidoMaterno: string = '';
  public perfil: string = '';
  public delegacion: string = '';
  public subdelegacion: string = '';

  constructor(
    private accountService: AccountService,
    private userIdle: UserIdleService) { }

  ngOnInit(): void {

    this.curp = this.accountService.getCurp();
    this.nombre = this.accountService.getNombre();
    this.apellidoPaterno = this.accountService.getApellidoPaterno();
    this.apellidoMaterno = this.accountService.getApellidoMaterno();
    this.perfil = this.accountService.getPerfil();
    this.delegacion = this.accountService.getDelegacion();
    this.subdelegacion = this.accountService.getSubdelegacion();

    this.curp = 'HELB931104HMCRZR00';
    this.nombre = 'Juan CARLOS';
    this.apellidoPaterno = 'Salinas';
    this.apellidoMaterno = '';
    this.perfil = ROLE.NIVELCENTRAL;
    this.delegacion = 'Delegación';
    this.subdelegacion = 'SUBDELEGACIÓN';

    //Start watching for user inactivity.
    this.userIdle.startWatching();
    
    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(() => this.modalInactividad());
    
    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => this.cerrarSesion());
  }

  cerrarSesion(){
    this.accountService.logout();
  }

  stop() {
    this.userIdle.stopTimer();
  }

  stopWatching() {
    this.userIdle.stopWatching();
  }

  startWatching() {
    this.userIdle.startWatching();
  }

  restart() {
    this.userIdle.resetTimer();
  }

  modalInactividad(){

  }

}
