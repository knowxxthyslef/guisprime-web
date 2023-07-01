import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { UserIdleService } from 'angular-user-idle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private userIdle: UserIdleService) { }

  ngOnInit(): void {
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
