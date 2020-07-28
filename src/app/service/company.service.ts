import { Injectable } from "@angular/core";
import { CustomHttpClient } from "./http.service";

@Injectable()
export class CompanyService {

    constructor(private http: CustomHttpClient) { }

    GetCompany() {
        return this.http.get("/v1/employees");
    }
    GetById(Id) {
        return this.http.get("/comany/Id/" + Id);
    }
}