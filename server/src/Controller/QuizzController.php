<?php

namespace App\Controller;

use App\Controller\AbstractAPIController;
use App\Model\PersonalityManager;
use App\Model\QuestionManager;
use App\Model\SummaryManager;
use App\Model\TreeManager;

class QuizzController extends AbstractAPIController
{
    public function getResults(int $score)
    {
        $summaryManager = new SummaryManager();

        if ($_SERVER['REQUEST_METHOD'] === "POST") { 
            $score = $_POST['points'];
            if ( $score >= 10 && $score <= 15) {
                $result = $summaryManager->getSummary(1);
            }
            return json_encode($result);
        }
    }
}
