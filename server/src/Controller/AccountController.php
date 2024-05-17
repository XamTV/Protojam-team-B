<?php

namespace App\Controller;

use App\Controller\AbstractAPIController;
use App\Model\AccountManager;
use App\Model\PersonalityManager;
use App\Model\QuestionManager;
use App\Model\SummaryManager;
use App\Model\TreeManager;

class AccountController extends AbstractAPIController
{

public function registerUser()
    {
        $body = file_get_contents('php://input');
        $user = json_decode($body, true);
        $accountManager = new AccountManager();
        $register = $accountManager->register($user);
        $_SESSION['username'] = $register['username'];
        
        return $register['username'];
    }

    public function connectUser()
    {
        $body = file_get_contents('php://input');
        $user = json_decode($body, true);
        $accountManager = new AccountManager();
        $connect = $accountManager->selectOneByName($user);
        if ($connect['password'] === $user['password']) {
            $_SESSION['username'] = $user['username'];
            return true;
        } else {
            return false;
        }
    }
}