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
        // var_dump($user);
        // die();
        if (isset($user['username']) && isset($user['password'])) {
            $register = $accountManager->register($user);
            $_SESSION['username'] = $register['username'];
            return $register['username'];
        } else {
            header('Location: /non');
        }
    }

    public function connectUser()
    {
        $body = file_get_contents('php://input');
        $user = json_decode($body, true);
        $accountManager = new AccountManager();
        $name = $accountManager->selectOneByName($user);
        if ($name['password'] === $user['password']) {
            $_SESSION['username'] = $user['username'];
            return true;
        } else {
            return false;
        }
    }
}