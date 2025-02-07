public with sharing class AccountController {
    
    @AuraEnabled(Cacheable=true)
     public static List<Account> getAccountList(){

        return [SELECT id,name,industry,type from Account LIMIT 5];

System.System.debug('Vikram');
      }
}