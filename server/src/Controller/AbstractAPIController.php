<?php

namespace App\Controller;

use App\Model\AccountManager;

abstract class AbstractAPIController extends AbstractController
{
    protected array|false $user;

    public function __construct()
    {
        parent::__construct();
        header('Content-Type: application/json');
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Authorization, Origin, X-Requested-With, Content-Type, Accept");

        $accountManager = new AccountManager();
        $this->user = isset($_SESSION['user_id']) ? $accountManager->selectOneById($_SESSION['user_id']) : false;
    }
}
