<?php

namespace App\Model;

use App\Model\AbstractManager;
use PDO;
use Symfony\Component\HttpClient\HttpClient;

class QuestionsManager extends AbstractManager
{
    public const TABLE = 'questions';
}