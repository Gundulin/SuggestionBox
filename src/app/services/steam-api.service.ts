import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface GameDetail {
  appId: number;
  name: string;
  playtimeForever: number;
}

@Injectable({
  providedIn: 'root'
})
export class SteamApiService {
  private games: GameDetail[];

  constructor(private http: HttpClient) {
    this.games = [];
  }

  private getGames(steamId: string): GameDetail[] {
    if (this.games.length > 0) {
      return this.games;
    }
    this.getOwnedGames(steamId).subscribe((data: any) => {
      console.log(data);
    });
    return [];
  }

  private getOwnedGames(steamId: string) {
    return this.http.get(this.urlBuilder(steamId));
  }

  private urlBuilder(steamId: string, service?: string) { // Will make this more modular
    return environment.steam_api_url_base + '/v0001/?key=' + environment.steam_api_key + '&steamid=' + steamId + '&format=json&include_appinfo=true'
  }

  public getSuggestion(steamId: string): string {
    this.getGames(steamId);
    return 'It\'s working!!';
  }
}
