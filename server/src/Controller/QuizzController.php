<?php

namespace App\Controller;

use App\Controller\AbstractAPIController;
use App\Model\PersonalityManager;
use App\Model\QuestionManager;
use App\Model\SummaryManager;
use App\Model\TreeManager;

class QuizzController extends AbstractAPIController
{
    public function getResults()
    {
        $summaryManager = new SummaryManager();    
        if ($_SERVER['REQUEST_METHOD'] === "POST") {
            $body = file_get_contents('php://input');
            $result = json_decode($body, true);
            if ($result === 24) {
                $summary = $summaryManager->getSummary(5);
            } elseif ($result >= 10 && $result <= 18) {
                $summary = $summaryManager->getSummary(1);
            } elseif ($result > 18 && $result <= 26) {
                $summary = $summaryManager->getSummary(2);
            } elseif ($result > 26 && $result <= 32) {
                $summary = $summaryManager->getSummary(3);
            } elseif ($result > 32) {
                $summary = $summaryManager->getSummary(4);
            }
            return json_encode($summary);
        }
    $summary = $summaryManager->getSummary(3);
    return json_encode($summary);
    }

    public function resultat()
    {
        var_dump($_SESSION);
        die();
        $resultat = $_SESSION ['result'];
        return $resultat;
    }
    

}