<?php

namespace App\Model;

use App\Model\AbstractManager;
use PDO;
use Symfony\Component\HttpClient\HttpClient;

class SummaryManager extends AbstractManager
{
    public const TABLE = 'summary';
}