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
            $result = $_POST;
            if (empty($result)) {
                $summary = $summaryManager->getSummary(5);
            } else {
                $summary = $summaryManager->getSummary(4);
            }
            return json_encode($summary);
        }
    $summary = $summaryManager->getSummary(2);
    return json_encode($summary);
    }
}